
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { 
  setUserDetails, 
  updateToken, 
  setLoading, 
  setError, 
  clearError 
} from "../../redux/authSlice";
import "../css/Auth.css";

const API_BASE_URL = "https://prime-press-laundary.onrender.com/api/v1";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      dispatch(setError("Please enter both email and password"));
      return;
    }
    
    dispatch(setLoading(true));
    dispatch(clearError());
    
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password
      });
      
      console.log("Login response:", response.data);
      
      if (response.data.token) {
        dispatch(updateToken(response.data.token));
      }
      
      if (response.data.user) {
        dispatch(setUserDetails(response.data.user));
      }
      
      navigate("/admin/dashboard");
      
    } catch (error) {
      console.error("Login error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
 
      if (errorMessage.toLowerCase().includes("verify")) {
        dispatch(setError("Please verify your email first. Sending new verification code..."));
        
        try {
       
          await axios.post(`${API_BASE_URL}/resend-otp`, { email });
          console.log("New OTP sent successfully to:", email);
          
          setTimeout(() => {
            navigate("/verify-email", { state: { email: email, autoSend: true } });
          }, 2000);
        } catch (otpError) {
          console.error("Failed to send OTP:", otpError.response?.data);
          setTimeout(() => {
            navigate("/verify-email", { state: { email: email, autoSend: false } });
          }, 2000);
        }
      } else {
        dispatch(setError(errorMessage));
      }
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
          <h2>Log in to PrimePress</h2>

          {error && (
            <div className="error-message" style={{
              color: error.includes("verify") ? "orange" : "red", 
              textAlign: "center", 
              marginBottom: "10px", 
              padding: "10px", 
              backgroundColor: error.includes("verify") ? "#fff3e0" : "#ffeeee", 
              borderRadius: "5px"
            }}>
              {error}
            </div>
          )}

          <form className="input-holder" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-input" style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                  style={{ width: "100%", paddingRight: "40px" }}
                />
                <span 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ 
                    position: "absolute", 
                    right: "10px", 
                    top: "50%", 
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "18px"
                  }}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className="login-btn" 
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
            
            <p className="signup-text">
              Don't have an account?
              <Link to="/signup"> Sign up </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;