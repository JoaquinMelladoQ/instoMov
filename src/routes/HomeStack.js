import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'; 
import MovieScreen from '../screens/MovieScreen';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="MovieScreen" component={MovieScreen} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
