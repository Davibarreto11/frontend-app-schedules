import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import store from '../store';

function RouteWrapper() {
  const { signed } = store.getState().auth;
  console.log(store.getState());
  if (signed) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default RouteWrapper;
