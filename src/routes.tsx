import React from 'react';

import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Test: React.FC = () => (
  <View>
    <Text>teste</Text>
  </View>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
