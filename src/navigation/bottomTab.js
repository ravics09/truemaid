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
  <BottomTabs.Navigator>
    <BottomTabs.Screen
      name="HomeTab"
      component={Home}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="home"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />

    <BottomTabs.Screen
      name="ListedTab"
      component={Listed}
      options={{
        headerShown: false,
        tabBarLabel: 'Listed',
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="MessagesTab"
      component={Message}
      options={{
        headerShown: false,
        tabBarLabel: 'Messages',
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="SettingTab"
      component={Setting}
      options={{
        headerShown: false,
        tabBarLabel: 'Setting',
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
export default BottomTab;
