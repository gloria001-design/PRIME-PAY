import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
  const { userToken } = useSelector((state) => state.auth);

  return !userToken ? <Outlet /> : <Navigate to="/admin/dashboard" replace />;
};

export default PublicRoute;
