import "../css/Auth.css";

const VerificationCode = () => {
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
          <p className="subtext">
            We have sent a verification code to your email address. Please check
            your inbox and enter the code below.
          </p>

          <div className="input-group">
            <label className="input-label">Verification code</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter code"
            />
          </div>

          <button className="btn-secondary">Verify</button>
          <a href="#" className="link-text">
            Resend verification code
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
