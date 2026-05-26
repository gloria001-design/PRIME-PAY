import { Link } from "react-router-dom";
import "../css/Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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

          <div className="input-holder">
            <div className="input-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="password-input">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                />

                <span className="eye-icon">
                  👁
                </span>
              </div>

              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button className="login-btn" onClick={() => navigate("/dashboard")}>
              Log in
            </button>

            <p className="signup-text">
              Don’t have an account?
              <Link to="/signup"> Sign up </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;