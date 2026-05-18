import { Link, useNavigate } from "react-router-dom";
import "../css/Auth.css";

const SignUp = () => {
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

        <div className="form-card">
          <h2>Sign up to PrimePress</h2>

          <div className="input-holder">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="button"
              className="signup-btn"
              onClick={() => navigate("/verify-email")}
            >
              Sign up
            </button>

            <p className="signup-text">
              Already have an account?
              <Link to="/login"> Log in </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;