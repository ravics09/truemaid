import React from 'react';
import 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { DrawerActions} from '@react-navigation/native';
const BottomTabs = createBottomTabNavigator();

import * as NavStack from './stackNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import FoundationIcon from 'react-native-vector-icons/Foundation';
FoundationIcon.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import EntypoIcon from 'react-native-vector-icons/Entypo';
EntypoIcon.loadFont().then(); 

const BottomTab = ({navigation}) => (
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
          <EntypoIcon
            name="add-to-list"
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
          <EntypoIcon
            name="chat"
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
          <EntypoIcon
            name="user"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomTab;
