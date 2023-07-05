import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const signed = false;

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
