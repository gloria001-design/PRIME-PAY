import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import "../css/Auth.css";
import { EmailRegex, PasswordRequirements, BaseURL } from "../../lib/HighFunction";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  
  const [Passmeet, setPassmeet] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  });

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });

  const [UsernameErrorMsg, setUsernameErrorMsg] = useState({ err: false, name: "", msg: "" });
  const [EmailerrorMsg, setEmailErrorMsg] = useState({ err: false, name: "", msg: "" });
  const [ConfirmPassworderrorMsg, setConfirmPasswordErrorMsg] = useState({ err: false, name: "", msg: "" });

  const HoldUserName = (e) => {
    const NewName = e.target.value;
    setUserInfo({ ...userInfo, fullName: NewName });
    if (NewName.trim() === "") {
      setUsernameErrorMsg({ err: true, name: "fullName", msg: "Full name is required" });
    } else {
      setUsernameErrorMsg({ err: false, name: "", msg: "" });
    }
  };

  const HoldEmail = (e) => {
    const NewEmail = e.target.value;
    setUserInfo({ ...userInfo, email: NewEmail });
    if (NewEmail.trim() === "") {
      setEmailErrorMsg({ err: true, name: "email", msg: "You must add an email" });
    } else if (!EmailRegex.test(NewEmail)) {
      setEmailErrorMsg({ err: true, name: "email", msg: "Please enter a valid Email" });
    } else {
      setEmailErrorMsg({ err: false, name: "", msg: "" });
    } 
  };

  const HoldPassWord = (e) => {
    const NewPass = e.target.value;
    setUserInfo({ ...userInfo, password: NewPass });
    setPassmeet(PasswordRequirements(NewPass));
  };

  const HoldConfirmPassword = (e) => {
    const NewConfirmPass = e.target.value;
    setUserInfo({ ...userInfo, confirmPassword: NewConfirmPass });

    if (NewConfirmPass.trim() === "") {
      setConfirmPasswordErrorMsg({ err: true, name: "confirmPassword", msg: "Please confirm your password" });
    } else if (NewConfirmPass !== userInfo.password) {
      setConfirmPasswordErrorMsg({ err: true, name: "confirmPassword", msg: "Passwords do not match" });
    } else {
      setConfirmPasswordErrorMsg({ err: false, name: "", msg: "" });
    }
  };

  const handleValidationAndSubmit = async (e) => {
    e.preventDefault();

    const allConditionsMet = Passmeet.length && Passmeet.upper && Passmeet.lower && Passmeet.number && Passmeet.special;
    const fieldsEmpty = !userInfo.fullName || !userInfo.email || !userInfo.password || !userInfo.confirmPassword;
    const hasOtherErrors = UsernameErrorMsg.err || EmailerrorMsg.err || ConfirmPassworderrorMsg.err;

    if (!allConditionsMet || fieldsEmpty || hasOtherErrors) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all fields correctly.",
        icon: "error",
        confirmButtonColor: "#008d94",
        confirmButtonText: "Back to Sign Up",
        confirmButtonWidth: "150px"  
      });
    } else {
      try {
        setIsLoading(true);

        const backendData = {
          fullName: userInfo.fullName,
          email: userInfo.email,
          password: userInfo.password
        };

        const response = await axios.post(`${BaseURL}admin`, backendData);
        localStorage.setItem("Name", backendData.fullName);

        await Swal.fire({
          title: "Success",
          text: "Registration successful! Please verify your email.",
          icon: "success",
          confirmButtonColor: "#008d94"
        });

        const userEmailAddress = userInfo.email;

        setUserInfo({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        navigate("/verify-email", { state: { email: userEmailAddress } });

      } catch (error) {
     
        
        Swal.fire({
          title: "Registration Failed",
          text: "An error occurred during signup.",
          icon: "error",
          confirmButtonColor: "#008d94"
        });
      } finally {
        setIsLoading(false);
      }
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

        <div className="form-card">
          <h2>Sign up to PrimePress</h2>

          <form className="input-holder" onSubmit={handleValidationAndSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={userInfo.fullName}
                onChange={HoldUserName}
              />
              <span className="error-text">
                {UsernameErrorMsg.msg && UsernameErrorMsg.name === 'fullName' ? UsernameErrorMsg.msg : ''}
              </span>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={HoldEmail}
              />
              <span className="error-text">
                {EmailerrorMsg.msg && EmailerrorMsg.name === 'email' ? EmailerrorMsg.msg : ''}
              </span>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-field-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={userInfo.password}
                  onChange={HoldPassWord}
                  onFocus={() => setShowText(true)}
                  onBlur={() => setShowText(false)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-btn"
                >
                  {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                </button>
              </div>

              {showText && (
                <div className="requirements-box">
                  <div className={`requirement-item ${Passmeet.length ? "valid" : "invalid"}`}>
                    {Passmeet.length ? <FaCheckCircle size={14} /> : <FaRegCircle size={14} />}
                    <span>8+ characters</span>
                  </div>
                  
                  <div className={`requirement-item ${Passmeet.upper ? "valid" : "invalid"}`}>
                    {Passmeet.upper ? <FaCheckCircle size={14} /> : <FaRegCircle size={14} />}
                    <span>Uppercase letter</span>
                  </div>

                  <div className={`requirement-item ${Passmeet.lower ? "valid" : "invalid"}`}>
                    {Passmeet.lower ? <FaCheckCircle size={14} /> : <FaRegCircle size={14} />}
                    <span>Lowercase letter</span>
                  </div>

                  <div className={`requirement-item ${Passmeet.number ? "valid" : "invalid"}`}>
                    {Passmeet.number ? <FaCheckCircle size={14} /> : <FaRegCircle size={14} />}
                    <span>Contain numbers</span>
                  </div>

                  <div className={`requirement-item full-width ${Passmeet.special ? "valid" : "invalid"}`}>
                    {Passmeet.special ? <FaCheckCircle size={14} /> : <FaRegCircle size={14} />}
                    <span>Contain special characters</span>
                  </div>
                </div>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-field-wrap">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={userInfo.confirmPassword}
                  onChange={HoldConfirmPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="toggle-btn"
                >
                  {showConfirmPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                </button>
              </div>
              <span className="error-text">
                {ConfirmPassworderrorMsg.msg && ConfirmPassworderrorMsg.name === 'confirmPassword' ? ConfirmPassworderrorMsg.msg : ''}
              </span>
            </div>

            <button
              type="submit"
              className="signup-btn"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </button>

            <p className="signup-text">
              Already have an account?
              <Link to="/login"> Log in </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;