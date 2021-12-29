import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './../screens/SignIn/index';
import SignUp from './../screens/SignUp/index';
import Launch from './../screens/Launch/index';

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

export default AuthStack;
