import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Service from './pages/Service';
import Pickup from './pages/Pickup';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import ForgotPassword from './pages/Auth/ForgetPassword';
import VerifyEmail from './pages/Auth/VerifyEmail';
import VerificationCode from './pages/Auth/VerificationCode';
import ResetPassword from './pages/Auth/ResetPassword';
import { ScrollToTop } from '../src/lib/HighFunction';
import AnalyticsDashboard from './pages/Admin/AnalyticsDashboard';
import AdminLayout from "./pages/Admin/AdminLayout"; 
import DashboardOverview from "./pages/Admin/AdminDashboard"; 
import OrdersPage from "./pages/Admin/Orders";
import Customers from "./pages/Admin/Customers";
import NotFoundPage from "./pages/404Page";

const App = () => {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route element={<LandingPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/pickup" element={<Pickup />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="settings" element={<div style={{ padding: "20px" }}><h2>Settings Content Placeholder</h2></div>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
