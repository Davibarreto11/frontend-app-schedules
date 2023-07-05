import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateSigned() {
  const signed = false;

  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PrivateSigned;
