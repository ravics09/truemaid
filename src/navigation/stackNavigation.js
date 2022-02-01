import React from 'react';
import {TouchableOpacity} from 'react-native';
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
  EditMaidDetails,
  EditProfilePhoto,
  ResetPassword,
  Listed,
  MaidDetail,
  Message,
  Chat,
} from './../screens';
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
    <Stack.Screen name="sideDrawer" component={SideDrawer} />
  </Stack.Navigator>
);

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={() => ({
        title: 'True Maid',
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.toggleDrawer()}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
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
    <Stack.Screen
      name="MaidDetail"
      component={MaidDetail}
      options={() => ({
        title: 'Maid Details',
        headerLeft: () => (
          <TouchableOpacity>
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
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={() => ({
        title: 'Chat',
        headerLeft: () => (
          <TouchableOpacity>
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

const ProfileStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.toggleDrawer()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={() => ({
        title: 'Edit Profile',
        headerLeft: () => (
          <TouchableOpacity>
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
    <Stack.Screen
      name="EditMaidDetails"
      component={EditMaidDetails}
      options={() => ({
        title: 'Edit Maid Details',
        headerLeft: () => (
          <TouchableOpacity>
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
    <Stack.Screen
      name="EditProfilePhoto"
      component={EditProfilePhoto}
      options={() => ({
        title: 'Edit Profile Photo',
        headerLeft: () => (
          <TouchableOpacity>
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
    <Stack.Screen
      name="ResetPassword"
      component={ResetPassword}
      options={() => ({
        title: 'Update Password',
        headerLeft: () => (
          <TouchableOpacity>
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
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Listed"
      component={Listed}
      options={{
        title: 'Listed Maid ',
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.toggleDrawer()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="MaidDetail"
      component={MaidDetail}
      options={() => ({
        title: 'Maid Detail',
        headerLeft: () => (
          <TouchableOpacity>
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
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Messages"
      component={Message}
      options={{
        title: 'Messages',
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="menu"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.toggleDrawer()}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={() => ({
        title: 'Chat',
        headerLeft: () => (
          <TouchableOpacity>
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
