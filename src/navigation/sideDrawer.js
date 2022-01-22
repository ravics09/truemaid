import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import {AboutUs, Privacy, Setting, Notification} from './../screens';
import BottomTab from './bottomTab';

const SideDrawer = ({navigation}) => (
  <Drawer.Navigator
    screenOptions={{
      drawerType: 'front',
      drawerStyle: {
        backgroundColor: '#ffff',
        width: 240,
      },
    }}>
    <Drawer.Screen
      name="bottomNav"
      component={BottomTab}
      options={() => ({
        drawerLabel: 'True Maid',
        headerShown: false
      })}
    />
    <Drawer.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        drawerLabel: 'About Us',
        headerShown: true,
        title: 'About Us',
        // headerLeft: () => (
        //   <TouchableOpacity style={{paddingLeft: 20}}>
        //     <Ionicons
        //       name="arrow-back"
        //       size={25}
        //       style={[{color: 'black'}]}
        //       onPress={() => navigation.goBack()}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    />
    <Drawer.Screen
      name="Privacy"
      component={Privacy}
      options={{
        drawerLabel: 'Privacy',
        headerShown: true,
        title: 'Privacy',
        // headerLeft: () => (
        //   <TouchableOpacity style={{paddingLeft: 20}}>
        //     <Ionicons
        //       name="arrow-back"
        //       size={25}
        //       style={[{color: 'black'}]}
        //       onPress={() => navigation.goBack()}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    />
    <Drawer.Screen
      name="Notification"
      component={Notification}
      options={() => ({
        title: 'Notification',
        drawerItemStyle: {display: 'none'},
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black', paddingRight: 15}]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Drawer.Screen
      name="Setting"
      component={Setting}
      options={{
        drawerLabel: 'Setting',
        headerShown: true,
        title: 'Setting',
        // headerLeft: () => (
        //   <TouchableOpacity style={{paddingLeft: 20}}>
        //     <Ionicons
        //       name="arrow-back"
        //       size={25}
        //       style={[{color: 'black'}]}
        //       onPress={() => navigation.goBack()}
        //     />
        //   </TouchableOpacity>
        // ),
      }}
    />
  </Drawer.Navigator>
);

export default SideDrawer;
