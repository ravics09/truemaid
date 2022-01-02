import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning
import NavigationString from './../constant/navigationString';

import {
  SignIn,
  SignUp,
  Launch,
  Profile,
  EditProfile,
  Listed,
  MaidDetail,
  Message,
  Chat,
} from './../screens';

import BottomTab from './bottomTab';
import SideDrawer from './sideDrawer';

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
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={SideDrawer}
      options={() => ({
        headerShown: false,
      })}
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
              onPress={() => navigation.navigate('Home')}
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

export {
  AuthStack,
  ProfileStack,
  ListedStack,
  MessageStack,
  MainStack,
  HomeStack,
};
