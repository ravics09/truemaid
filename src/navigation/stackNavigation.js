import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning


import SignIn from './../screens/SignIn/index';
import SignUp from './../screens/SignUp/index';
import Launch from './../screens/Launch/index';
import Home from './../screens/Home/index';
import Profile from './../screens/Profile/index';
import EditProfile from './../screens/EditProfile/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Launch">
    <Stack.Screen
      name="Launch"
      component={Launch}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="ProfileScreen"
    screenOptions={{
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="ProfileScreen"
      component={Profile}
      options={() => ({
        title: 'Profile',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() =>
                navigation.goBack()
              }
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="EditProfileScreen"
      component={EditProfile}
      options={() => ({
        title: 'Edit Profile',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() =>
                navigation.navigate('ProfileScreen') 
              }
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export {AuthStack, ProfileStack};
