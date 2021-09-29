import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home/index';
import Search from './src/pages/search/index';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <Stack.Navigator initialRouteName='Search'>
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MyStack;
