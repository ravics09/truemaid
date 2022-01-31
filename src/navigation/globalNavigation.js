import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as NavStack from './stackNavigation';
import Onboarding from './../screens/Onboarding/index';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181D3D',
  },
};

const SwitchNavigation = (isFirstTimeLaunch, isLoggedIn) => {
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
              name="MainStack"
              component={NavStack.MainStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      break;
    case false:
      return (
        <NavigationContainer theme={MyTheme}>
          {isLoggedIn===true ? (
            <Stack.Navigator headerMode="none">
              <Stack.Screen
                name="MainStack"
                component={NavStack.MainStack}
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
              <Stack.Screen
                name="MainStack"
                component={NavStack.MainStack}
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
  const {isLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    console.log("isLoggedIn value==",isLoggedIn);
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        console.log("App launched for first time");
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstTimeLaunch(true);
      } else {
        console.log("App launched for second time");
        setIsFirstTimeLaunch(false);
      }
    });
  }, []);

  return <>{SwitchNavigation(isFirstTimeLaunch, isLoggedIn)}</>;
};

export default GlobalNavigator;
