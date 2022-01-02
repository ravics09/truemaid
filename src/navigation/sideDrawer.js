import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import * as NavStack from './stackNavigation';
import BottomTab from './bottomTab';
import Home from './../screens/Home/index';

const SideDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="BottomTab"
      component={BottomTab}
      options={{drawerLabel: 'True-Maid', headerShown: true}}
    />
     <Drawer.Screen
      name="Setting"
      component={NavStack.SettingStack}
      options={{drawerLabel: 'Settings', headerShown: true}}
    />
  </Drawer.Navigator>
);

export default SideDrawer;
