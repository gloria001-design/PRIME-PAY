import "../css/Auth.css";

const ForgotPassword = () => {
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

<div className="input-group">
  <label className="input-label">Email</label>
  <input type="email" className="input-field" placeholder="Enter your email address" />
</div>

<button className="btn-primary">Send</button>
</div>
</div>
  </div>
  );
};

export default ForgotPassword;