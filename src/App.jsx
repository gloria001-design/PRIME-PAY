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
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <Routes>
    

      <Route
        path="/*"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Service />} />
              <Route path="/pickup" element={<PickUp />} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </>
        }
      />
          <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/analysis" element={<AnalyticsDashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification-code" element={<VerificationCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
