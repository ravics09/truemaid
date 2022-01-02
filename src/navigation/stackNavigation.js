import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning
import NavigationString from './../constant/navigationString';

import {
  Home,
  SignIn,
  SignUp,
  Launch,
  Profile,
  EditProfile,
  Listed,
  Setting,
  MaidDetail,
  Message,
  Chat,
} from './../screens';

import BottomTab from './bottomTab';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Launch">
    <Stack.Screen
      name={NavigationString.LAUNCH}
      component={Launch}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={NavigationString.SIGN_IN}
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={NavigationString.SIGN_UP}
      component={SignUp}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTab" component={BottomTab} />
  </Stack.Navigator>
);

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="TrueMaid"
    screenOptions={{
      title: 'True Maid',
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="TrueMaid"
      component={Home}
    />
    <Stack.Screen
      name="MaidDetail"
      component={MaidDetail}
      options={() => ({
        title: 'Maid Details',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('TrueMaid')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      title: 'True Maid',
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={() => ({
        title: 'Edit Profile',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Profile')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const ListedStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Listed"
    screenOptions={{
      title: 'True Maid',
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen name="Listed" component={Listed} />
    <Stack.Screen
      name="MaidDetail"
      component={MaidDetail}
      options={() => ({
        title: 'Maid Detail',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Listed')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Messages"
    screenOptions={{
      title: 'True Maid',
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen name="Messages" component={Message} />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={() => ({
        title: 'Chat',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Messages')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const SettingStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="SettingScreen"
    screenOptions={{
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="SettingScreen"
      component={Setting}
      options={() => ({
        headerShown: false,
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
      })}
    />
  </Stack.Navigator>
);

export {
  AuthStack,
  ProfileStack,
  ListedStack,
  MessageStack,
  MainStack,
  SettingStack,
  HomeStack,
};
