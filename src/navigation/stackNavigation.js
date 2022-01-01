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
  Chat
} from './../screens';

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

// const MainStack = () => {
//   <Stack.Navigator>
//     <Stack.Screen
//       name={NavigationString.HOME}
//       component={SideDrawer}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name={NavigationString.MAID_DETAIL}
//       component={MaidDetail}
//       options={{headerShown: false}}
//     />
//   </Stack.Navigator>;
// };

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
        headerShown: false,
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
        headerShown: true,
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

const ListedStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="ListedScreen"
    screenOptions={{
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="ListedScreen"
      component={Listed}
      options={() => ({
        headerShown: false,
        title: 'Listed',
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
    <Stack.Screen
      name="MaidDetailScreen"
      component={MaidDetail}
      options={() => ({
        headerShown:  true,
        title: 'MaidDetail',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('ListedScreen')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const MessageStack  = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="MessageScreen"
    screenOptions={{
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="MessageScreen"
      component={Message}
      options={() => ({
        headerShown: false,
        title: 'Messages',
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
    <Stack.Screen
      name="ChatScreen"
      component={Chat}
      options={() => ({
        headerShown:  true,
        title: 'Chat',
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft: 20}}>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('MessageScreen')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
)

export {AuthStack, ProfileStack, ListedStack, MessageStack};
