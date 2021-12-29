import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './stackNavigation';
import Onboarding from './../screens/Onboarding/index';

const Stack = createNativeStackNavigator();

const SwitchNavigation = isFirstTimeLaunch => {
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
              component={AuthStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      break;
    case false:
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      break;
  }
};

const GlobalNavigator = () => {
  const [isFirstTimeLaunch, setIsFirstTimeLaunch] = useState(null);

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

  return <>{SwitchNavigation(isFirstTimeLaunch)}</>;
};

export default GlobalNavigator;
