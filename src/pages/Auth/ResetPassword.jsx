import "../css/Auth.css";

const ResetPassword = () => {
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
        <h2>Reset password</h2>
        
        <div className="input-group">
          <label className="input-label">New password</label>
          <input type="password" className="input-field" placeholder="Enter new password" />
        </div>

        <div className="input-group">
          <label className="input-label">Confirm new password</label>
          <input type="password" className="input-field" placeholder="Confirm new password" />
        </div>

        <button className="btn-primary">Reset password</button>
      </div>
      </div>
    </div>
  );
};

export default ResetPassword;