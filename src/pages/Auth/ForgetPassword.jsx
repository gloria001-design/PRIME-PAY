import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading, setError, clearError } from "../../redux/authSlice";
import { BaseURL } from "../../lib/HighFunction";
import "../css/Auth.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [email, setEmail] = useState("");

  const handleSendCode = async (e) => {
    e.preventDefault();
    
    if (!email) {
      dispatch(setError("Please enter your email address"));
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      dispatch(setError("Please enter a valid email address"));
      return;
    }
    
    dispatch(setLoading(true));
    dispatch(clearError());
    
    try {
      const response = await axios.post(`${BaseURL}/forgot-password`, {
        email: email
      });
      
      navigate("/verification-code", { state: { email: email } });
      
    } catch (error) {
      console.error("Forgot password error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Failed to send reset code. Please try again.";
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
          <h2>Forgot Password</h2>
          <p className="subtext">Enter your email address to receive a verification code to reset your password.</p>

          {error && (
            <div className="error-message" style={{
              color: "red", 
              textAlign: "center", 
              marginBottom: "15px", 
              padding: "10px", 
              backgroundColor: "#ffeeee", 
              borderRadius: "5px",
              fontSize: "14px"
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSendCode}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px"
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#008d94",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <p className="signup-text" style={{ textAlign: "center", marginTop: "20px" }}>
            <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#008d94" }}>
              Back to Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;