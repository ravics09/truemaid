import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import * as NavStack from './stackNavigation';
import BottomTab from './bottomTab';

const SideDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="True Maid"
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
