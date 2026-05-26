import React from "react";
import { Link } from "react-router-dom";
import "./css/404Page.css";

const NotFoundPage = () => {
  return (
    <div className="error-holder">
      <div className="container">
        <div className="logo">
          <img
            src="https://i.postimg.cc/BZzp3z4t/Frame-1000006450.png"
            alt="PrimePress Logo"
          />
        </div>

        <div className="form-card error-card">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-msg">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/login" className="signup-btn error-btn">
            Go Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;