import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AdminDashboard } from '../../pages/admin/dashboard';

const Admin = createNativeStackNavigator();

export function AdminRoutes() {
  return(
    <Admin.Navigator>
      <Admin.Screen name="dashboard" component={AdminDashboard} />
    </Admin.Navigator>
  )
};
