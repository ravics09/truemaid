import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import {AboutUs, Privacy, Home, Setting, Notification} from './../screens';

const SideDrawer = ({navigation}) => (
  <Drawer.Navigator
  screenOptions={{
    drawerType: 'front',
    drawerStyle: {
      backgroundColor: '#fffff',
      width: 240,
    },
  }}
  >
    <Drawer.Screen
      name="True Maid"
      component={Home}
      options={() => ({
        drawerLabel: 'True Maid',
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="notifications"
              size={25}
              style={[{color: 'black', paddingRight: 15}]}
              onPress={() => navigation.navigate('Notification')}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Drawer.Screen
      name="AboutUs"
      component={AboutUs}
      options={{
        drawerLabel: 'About Us',
        headerShown: true,
        title: 'About Us',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Drawer.Screen
      name="Privacy"
      component={Privacy}
      options={{
        drawerLabel: 'Privacy',
        headerShown: true,
        title: 'Privacy',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
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
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Drawer.Screen
      name="signout"
      component={Setting}
      options={{
        drawerLabel: 'Sign Out',
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </Drawer.Navigator>
);

export default SideDrawer;
