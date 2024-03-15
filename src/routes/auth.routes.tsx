import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/Login';

const Routes = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Test" component={Login} />
  </Stack.Navigator>
);

export default Routes;
