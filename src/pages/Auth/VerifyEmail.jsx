// VerifyEmail.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { 
  verifyAdmin, 
  verifyAdminSuccess, 
  verifyAdminFail,
  resendOTP, 
  resendOTPSuccess, 
  resendOTPFail,
  clearError 
} from "../../redux/authSlice";
import "../css/Auth.css";

const API_BASE_URL = "https://prime-press-laundary.onrender.com/api/v1";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const email = location.state?.email || "";
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(180);
  const [canResend, setCanResend] = useState(false);
  
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // Fixed: Actual API call for verification
  const handleVerify = async () => {
    const otpCode = otp.join("");
    
    if (otpCode.length !== 6) {
      alert("Please enter the 6-digit OTP code");
      return;
    }
    
    if (!email) {
      alert("Email address is missing. Please go back and try again.");
      return;
    }
    
    dispatch(verifyAdmin()); // Set loading to true
    
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/verify`, {
        email: email,
        otp: otpCode
      });
      
      console.log("Verification response:", response.data);
      dispatch(verifyAdminSuccess());
      alert("Email verified successfully!");
      navigate("/login");
      
    } catch (error) {
      console.error("Verification error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Verification failed";
      dispatch(verifyAdminFail(errorMessage));
      alert(errorMessage);
    }
  };


  const handleResendOTP = async () => {
    if (!canResend) {
      alert(`Please wait ${formatTime(timer)} before requesting another code`);
      return;
    }
    
    if (!email) {
      alert("Email address is missing. Please go back and try again.");
      return;
    }
    
    dispatch(resendOTP());
    
    try {
      const response = await axios.post(`${API_BASE_URL}/resend-otp`, {
        email: email
      });
      
      console.log("Resend OTP response:", response.data);
      dispatch(resendOTPSuccess());
      alert("A new OTP code has been sent to your email!");
      
 
      setTimer(180);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      document.getElementById("otp-0")?.focus();
      dispatch(clearError());
      
    } catch (error) {
      console.error("Resend error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Failed to resend OTP";
      dispatch(resendOTPFail(errorMessage));
      alert(errorMessage);
    }
  };

  return (
    <div className="signup-holder">
      <div className="container">
        <div className="logo">
          <img
            src="https://i.postimg.cc/BZzp3z4t/Frame-1000006450.png"
            alt="PrimePress Logo"
          />
        </div>

        <div className="verify-card">
          <h2>Verify Your Email</h2>

          <p className="verify-text">
            A 6 digit code has been sent to your email address
            <br />
            <strong>{email || "your email"}</strong>
          </p>

          {error && <div className="error-message" style={{color: "red", textAlign: "center", marginBottom: "10px"}}>{error}</div>}

          <div className="otp-section">
            <label>OTP</label>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={loading}
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="continue-btn"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Continue"}
          </button>

          <p className="otp-expire">
            OTP Expires in {formatTime(timer)}
          </p>

          <p className="resend-text">
            Didn't receive any code?
            <span 
              onClick={handleResendOTP} 
              style={{ 
                cursor: canResend ? "pointer" : "not-allowed", 
                color: canResend ? "blue" : "gray",
                textDecoration: "underline",
                marginLeft: "5px"
              }}
            >
              Click Me
            </span>
            to resend
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;