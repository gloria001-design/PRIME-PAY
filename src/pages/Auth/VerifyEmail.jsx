import "../css/Auth.css";

const VerifyEmail = () => {
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
            A 6 digit code has been sent to your email
            address, enter the code to verify your email
          </p>

          <div className="otp-section">
            <label>OTP</label>

            <div className="otp-inputs">
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
            </div>
          </div>

          <button className="continue-btn">
            Continue
          </button>

          <p className="otp-expire">
            OTP Expires in 3:00
          </p>

          <p className="resend-text">
            Didn't receive any code?
            <span> Click Me </span>
            to resend
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;