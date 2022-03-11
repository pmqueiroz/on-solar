import React from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from './src/routes/index';

const App: React.FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar backgroundColor={'#142344'}/>
        <View style={{ flex: 1, backgroundColor: '#142344' }}>
          <Routes />
        </View>
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;