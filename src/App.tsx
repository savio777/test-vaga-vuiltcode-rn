import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import AppProvider from './hooks';

import Routes from './routes';
import colors from './helpers/colors';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={colors.backgroundColor}
    />
    <AppProvider>
      <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
