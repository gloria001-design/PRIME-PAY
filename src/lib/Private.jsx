import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

  const token = localStorage.getItem("token");

  if (token && token !== "null" && token !== "undefined") {
    return <Outlet />;
  }
  
  return <Navigate to="/" replace />;
};

export default PrivateRoute;