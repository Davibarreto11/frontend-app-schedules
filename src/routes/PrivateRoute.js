import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute() {
  const signed = false;

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }
}

export default PrivateRoute;
