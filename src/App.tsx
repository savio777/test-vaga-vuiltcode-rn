import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import Routes from './routes';
import store from './store';

import colors from './helpers/colors';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={colors.backgroundColor}
    />
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: colors.backgroundColor}}>
        <Routes />
      </View>
    </Provider>
  </NavigationContainer>
);

export default App;
