import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Light from '../screens/topBar/Light';
import Battery from '../screens/topBar/Battery';
import Orientation from '../screens/topBar/Orientation';
const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1480F3',
        },
        tabBarLabelStyle: {color: '#FFFFFF', fontSize: 14},
        tabBarIndicatorStyle: {height: 5, backgroundColor: '#0A66C9'},
      }}>
      <Tab.Screen name="light" component={Light} />
      <Tab.Screen name="battery" component={Battery} />
      <Tab.Screen name="orientation" component={Orientation} />
    </Tab.Navigator>
  );
};

export default TopBarNavigator;
