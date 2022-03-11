import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { dashboard } from '../../pages/representative/dashboard';

const User = createNativeStackNavigator();

export function UserRoutes() {
  return(
    <User.Navigator>
      <User.Screen name='dashboard' component={dashboard} />
    </User.Navigator>
  )
}