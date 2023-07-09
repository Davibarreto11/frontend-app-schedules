import React from 'react';

import api from '../../services/api';

import DefaultLayout from '../_layouts/default';

function Dashboard() {
  api.get('appointments');

  return (
    <DefaultLayout>
      <h1>Dashboard</h1>
    </DefaultLayout>
  );
}

export default Dashboard;
