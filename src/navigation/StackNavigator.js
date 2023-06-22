import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import TopBarNavigator from './TopBarNavigator';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="topbar" component={TopBarNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
