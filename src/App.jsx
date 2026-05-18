import ForgotPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignUp from "./pages/Auth/SignUp";
import VerificationCode from "./pages/Auth/VerificationCode";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <div>
      <SignUp />
      <VerifyEmail />
      <Login />
      <ForgotPassword />
      <VerificationCode />
      <ResetPassword />
      <LandingPage />
    </div>
  );
};

export default App;
