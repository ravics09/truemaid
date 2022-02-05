import React from 'react';
import {useRoute} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTabs = createBottomTabNavigator();

import * as NavStack from './stackNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import FoundationIcon from 'react-native-vector-icons/Foundation';
FoundationIcon.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import EntypoIcon from 'react-native-vector-icons/Entypo';
EntypoIcon.loadFont().then();

const BottomTab = ({navigation}) => {
  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);

    console.log('routename1', routeName);

    if (routeName === 'Chat') {
      return 'none';
    }
    return false;
  };
  return (
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
        name="HomeStack"
        component={NavStack.HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarStyle: {display: getTabBarVisibility(route), backgroundColor:'#181D3D'},
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={23}
              color={focused ? 'white' : '#808080'}
            />
          ),
        })}
      />

      <BottomTabs.Screen
        name="ListedStack"
        component={NavStack.ListedStack}
        options={({route}) => ({
          tabBarLabel: 'Listed',
          tabBarStyle: {display: getTabBarVisibility(route), backgroundColor:'#181D3D'},
          tabBarIcon: ({focused}) => (
            <EntypoIcon
              name="add-to-list"
              size={23}
              color={focused ? 'white' : '#808080'}
            />
          ),
        })}
      />
      <BottomTabs.Screen
        name="MessagesStack"
        component={NavStack.MessageStack}
        options={({route}) => ({
          tabBarLabel: 'Messages',
          tabBarStyle: {display: getTabBarVisibility(route), backgroundColor:'#181D3D'},
          tabBarIcon: ({focused}) => (
            <EntypoIcon
              name="chat"
              size={23}
              color={focused ? 'white' : '#808080'}
            />
          ),
        })}
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
};

export default BottomTab;
