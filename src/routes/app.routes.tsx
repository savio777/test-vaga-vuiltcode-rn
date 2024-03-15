import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../helpers/colors';

import Doctors from '../screens/Doctors';
import Patients from '../screens/Patients';

const Tab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarActiveTintColor: colors.orange,
      tabBarInactiveTintColor: colors.blue,
      tabBarLabelStyle: {fontSize: 14},
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'Doctors') {
          iconName = focused ? 'doctor' : 'doctor';
        } else if (route.name === 'Patients') {
          iconName = focused ? 'account' : 'account-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
    <Tab.Screen name="Doctors" component={Doctors} />
    <Tab.Screen name="Patients" component={Patients} />
  </Tab.Navigator>
);

export default AuthRoutes;
