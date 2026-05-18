import "../css/Auth.css";

const Login = () => {
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

              <p className="forgot-password">
                Forgot password?
              </p>
            </div>

            <button className="login-btn">
              Log in
            </button>

            <p className="signup-text">
              Don’t have an account?
              <span> Sign up </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;