import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../screens/Login';

const Routes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Test" component={Login} />
  </Stack.Navigator>
);

export default Routes;
