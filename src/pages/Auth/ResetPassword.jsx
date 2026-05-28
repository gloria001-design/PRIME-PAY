
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { setLoading, setError, clearError, logout } from "../../redux/authSlice";
import { BaseURL } from "../../lib/HighFunction";
import "../css/Auth.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const email = location.state?.email || "";
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
    setIsSubmitting(false);
  }, [dispatch]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      dispatch(setError("Please fill in all fields"));
      return;
    }
    
    if (password !== confirmPassword) {
      dispatch(setError("Passwords do not match"));
      return;
    }
    
    if (password.length < 6) {
      dispatch(setError("Password must be at least 6 characters"));
      return;
    }
    
    if (!email) {
      dispatch(setError("Email is missing. Please go back and try again."));
      return;
    }
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    dispatch(clearError());
    
    try {
      const response = await axios.post(`${BaseURL}/reset-password`, {
        email: email,
        password: password
      });
      
      console.log("Reset password response:", response.data);
     
      dispatch(logout());
      
      alert("Password reset successful! Please login with your new password.");
      navigate("/login", { replace: true });
      
    } catch (error) {
      console.error("Reset password error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Failed to reset password. Please try again.";
      dispatch(setError(errorMessage));
      setIsSubmitting(false);
    }
  };

  if (!email) {
    return (
      <div className="signup-holder">
        <div className="container">
          <div className="login-card">
            <h2>Reset Password</h2>
            <div className="error-message" style={{
              color: "red", 
              textAlign: "center", 
              marginBottom: "15px", 
              padding: "10px", 
              backgroundColor: "#ffeeee", 
              borderRadius: "5px"
            }}>
              Invalid request. Email is missing. Please go back and try again.
            </div>
            <button
              onClick={() => navigate("/forgot-password")}
              className="signup-btn"
            >
              Go to Forgot Password
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <h2>Reset Password</h2>
          
          {email && (
            <p className="subtext" style={{ textAlign: "center", marginBottom: "20px" }}>
              Resetting password for: <strong>{email}</strong>
            </p>
          )}

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

          <form onSubmit={handleResetPassword}>
            <div className="input-group">
              <label htmlFor="password">New Password</label>
              <div className="password-field-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-btn"
                  disabled={isSubmitting}
                >
                  {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="password-field-wrap">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="toggle-btn"
                  disabled={isSubmitting}
                >
                  {showConfirmPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="signup-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <span 
              onClick={() => {
                dispatch(clearError());
                navigate("/login");
              }} 
              style={{ 
                cursor: "pointer", 
                color: "#008d94",
                fontSize: "14px",
                textDecoration: "underline"
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

export default ResetPassword;