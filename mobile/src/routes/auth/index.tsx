import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../../pages/auth/signin';
import { AdminSignIn } from '../../pages/auth/admin/signin';

const Auth = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Auth.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }} >
      <Auth.Group>
        <Auth.Screen name="signn" component={SignIn}  />
      </Auth.Group>
      
      <Auth.Group >
        <Auth.Screen name="admin-signin" component={AdminSignIn}  />
      </Auth.Group>

    </Auth.Navigator>
  )
};