import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont().then();

import {AboutUs, Privacy, Setting, Notification} from './../screens';
import CustomDrawer from '../components/customDrawer';
import BottomTab from './bottomTab';

const SideDrawer = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
      drawerType: 'front',
      drawerActiveBackgroundColor: '#181D3D',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
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
        headerShown: false,
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} color={color} />
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
        drawerIcon: ({color}) => (
          <Ionicons name="people" size={22} color={color} />
        ),
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
        drawerIcon: ({color}) => (
          <MaterialIcons name="privacy-tip" size={22} color={color} />
        ),
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
        drawerIcon: ({color}) => (
          <Ionicons name="settings-outline" size={22} color={color} />
        ),
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
