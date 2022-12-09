import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

import Seila from './src/Drawer/index.js';

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Seila" component={Seila}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}