import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as NavStack from './stackNavigation';
import SideDrawer from './sideDrawer';
import Onboarding from './../screens/Onboarding/index';

const Stack = createNativeStackNavigator();

const SwitchNavigation = (isFirstTimeLaunch, user) => {
  switch (isFirstTimeLaunch) {
    case null:
      return null;
      break;
    case true:
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Auth"
              component={NavStack.AuthStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SideDrawer"
              component={SideDrawer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      break;
    case false:
      return (
        <NavigationContainer>
          {user ? (
            <Stack.Navigator headerMode="none">
              <Stack.Screen
                name="SideDrawer"
                component={SideDrawer}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator headerMode="none">
              <Stack.Screen
                name="Auth"
                component={NavStack.AuthStack}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      );
      break;
  }
};

const GlobalNavigator = () => {
  const [isFirstTimeLaunch, setIsFirstTimeLaunch] = useState(null);
  const [user, setUser] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstTimeLaunch(true);
      } else {
        setIsFirstTimeLaunch(false);
      }
    });
  }, []);

  return <>{SwitchNavigation(isFirstTimeLaunch, user)}</>;
};

export default GlobalNavigator;
