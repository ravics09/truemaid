import React from 'react';
import 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DrawerActions} from '@react-navigation/native';
const BottomTabs = createBottomTabNavigator();

import Home from './../screens/Home/index';
import * as NavStack from './stackNavigation';
import SideDrawer from './sideDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import FoundationIcon from 'react-native-vector-icons/Foundation';
FoundationIcon.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

const BottomTab = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#808080',
      tabBarActiveBackgroundColor: '#181D3D',
      tabBarInactiveBackgroundColor: '#181D3D',
      tabBarStyle: [
        {
          backgroundColor: '#181D3D',
        },
      ],
    }}>
    <BottomTabs.Screen
      name="HomeStack"
      component={NavStack.HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="home"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />

    <BottomTabs.Screen
      name="ListedStack"
      component={NavStack.ListedStack}
      options={{
        tabBarLabel: 'Listed',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="MessagesStack"
      component={NavStack.MessageStack}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="ProfileStack"
      component={NavStack.ProfileStack}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="MoreStack"
      component={SideDrawer}
      listeners={({navigation})=>({
        tabPress: (e) => {
          e.preventDefault();
          navigation.dispatch(DrawerActions.openDrawer());
        }
      })}
      options={{
        tabBarLabel: 'More',
        tabBarIcon: ({focused}) => (
          <FoundationIcon
            name="indent-more"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomTab;
