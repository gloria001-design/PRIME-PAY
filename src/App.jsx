import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignUp from "./pages/Auth/SignUp";
import VerificationCode from "./pages/Auth/VerificationCode";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import DashboardTable from "./pages/DashboardTable";
import AnalyticsDashboard from "./pages/AnalyticsDashboard"
const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardTable />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification-code" element={<VerificationCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/analysis" element={<AnalyticsDashboard/>} />
    </Routes>
  );
};

export default App;
