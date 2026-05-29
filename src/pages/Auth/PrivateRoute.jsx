import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const userToken = useSelector((state) => state.auth.userToken);

  return userToken !== null ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
