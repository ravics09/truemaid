import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import NavigationProvider from './src/navigation';

const App = () => {
  return(
    <NavigationProvider/>
  )
}

export default App;