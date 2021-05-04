import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeStack';
//import Home from '../screens/Home';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="HomeNavigation" component={HomeNavigation} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;

