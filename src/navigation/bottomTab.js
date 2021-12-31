import React from 'react';
import 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTabs = createBottomTabNavigator();

import Home from './../screens/Home/index';
import Listed from './../screens/Listed/index';
import Message from './../screens/Message/index';
import Setting from './../screens/Setting/index';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

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
          backgroundColor: '#181D3D'
        },
      ],
    }}>
    <BottomTabs.Screen
      name="HomeTab"
      component={Home}
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
      name="ListedTab"
      component={Listed}
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
      name="MessagesTab"
      component={Message}
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
      name="SettingTab"
      component={Setting}
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'white' : '#808080'}
          />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
export default BottomTab;
