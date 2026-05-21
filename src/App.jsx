import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignUp from "./pages/Auth/SignUp";
import VerificationCode from "./pages/Auth/VerificationCode";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import Home from "./pages/Home";
import Service from "./pages/Service"; 
import Header from "./components/Header"; 
import PickUp from "./pages/PickUp";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Service />} />
                <Route path="/pickup" element={<PickUp />} /> 
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </>
          }
        />
      </Routes>
    
  );
};

export default App;