import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as NavStack from './stackNavigation';
import SideDrawer from './sideDrawer';
import Onboarding from './../screens/Onboarding/index';
import BottomTabs from './bottomTab';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181D3D'
  },
};

const SwitchNavigation = (isFirstTimeLaunch, user) => {
  switch (isFirstTimeLaunch) {
    case null:
      return null;
      break;
    case true:
      return (
        <NavigationContainer theme={MyTheme}>
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
        <NavigationContainer theme={MyTheme}>
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
