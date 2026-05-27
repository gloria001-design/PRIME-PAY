// VerificationCode.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading, setError, clearError } from "../../redux/authSlice";
import "../css/Auth.css";

const API_BASE_URL = "https://prime-press-laundary.onrender.com/api/v1";

const VerificationCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  

  const email = location.state?.email || "";
  
  const [verificationCode, setVerificationCode] = useState("");
  const [timer, setTimer] = useState(180); // 3 minutes countdown
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

  const handleVerify = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      dispatch(setError("Please enter a valid 6-digit verification code"));
      return;
    }
    
    if (!email) {
      dispatch(setError("Email address is missing. Please go back and try again."));
      return;
    }
    
    navigate("/reset-password", { 
      state: { 
        email: email, 
        otp: verificationCode 
      } 
    });
  };

  const handleResendCode = async () => {
    if (!canResend) {
      alert(`Please wait ${formatTime(timer)} before requesting another code`);
      return;
    }
    
    if (!email) {
      dispatch(setError("Email address is missing. Please go back and try again."));
      return;
    }
    
    dispatch(setLoading(true));
    dispatch(clearError());
    
    try {
      
      const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
        email: email
      });
      
      console.log("Resend response:", response.data);
      alert("A new verification code has been sent to your email!");
      
      setTimer(180);
      setCanResend(false);
      setVerificationCode("");
      
    } catch (error) {
      console.error("Resend error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Failed to resend code. Please try again.";
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
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

        <div className="login-card">
          <h2>Verify Code</h2>
          <p className="subtext">
            We have sent a verification code to your email address. Please check
            your inbox and enter the code below.
          </p>
          <p className="subtext" style={{ color: "#008d94", fontWeight: "bold" }}>
            {email || "your email"}
          </p>

          {error && (
            <div className="error-message" style={{
              color: "red", 
              textAlign: "center", 
              marginBottom: "15px", 
              padding: "10px", 
              backgroundColor: "#ffeeee", 
              borderRadius: "5px"
            }}>
              {error}
            </div>
          )}

          <div className="input-group">
            <label className="input-label">Verification code</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter 6-digit code"
              value={verificationCode}
              onChange={(e) => {
           
                const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
                setVerificationCode(value);
              }}
              disabled={loading}
              maxLength={6}
              autoFocus
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "18px",
                textAlign: "center",
                letterSpacing: "5px"
              }}
            />
          </div>

          <button
            type="button"
            className="btn-secondary"
            onClick={handleVerify}
            disabled={loading || verificationCode.length !== 6}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: verificationCode.length === 6 ? "#008d94" : "#cccccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: (loading || verificationCode.length !== 6) ? "not-allowed" : "pointer",
              opacity: (loading || verificationCode.length !== 6) ? 0.7 : 1,
              marginTop: "10px"
            }}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
          
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>
              Code expires in: <strong style={{ color: timer < 60 ? "red" : "#008d94" }}>{formatTime(timer)}</strong>
            </span>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <a 
              href="#" 
              className="link-text" 
              onClick={(e) => {
                e.preventDefault();
                handleResendCode();
              }}
              style={{
                color: canResend ? "#008d94" : "#999",
                cursor: canResend ? "pointer" : "not-allowed",
                textDecoration: "underline",
                fontSize: "14px"
              }}
            >
              {canResend ? "Resend verification code" : `Resend code in ${formatTime(timer)}`}
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <span 
              onClick={() => navigate("/login")} 
              style={{ 
                cursor: "pointer", 
                color: "#008d94",
                fontSize: "14px"
              }}
            >
              ← Back to Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;