import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const ForgotPassword = () => {
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
<h2>Forgot Password</h2>
<p className="subtext">Enter your email address to receive a verification code to reset your password.</p>

<div className="input-group">
  <label className="input-label">Email</label>
  <input type="email" className="input-field" placeholder="Enter your email address" />
</div>

<button
  type="button"
  className="btn-primary"
  onClick={() => navigate("/verification-code")}
>
  Send
</button>
</div>
</div>
  </div>
  );
};

export default ForgotPassword;