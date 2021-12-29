import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import NavigationProvider from './src/navigation';
import LottieView from 'lottie-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <SafeAreaProvider style={{ flex: 1}}>
      {isLoading ? (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '50%',
            }}>
            <LottieView
              source={require('./src/assets/maid1.json')}
              autoPlay
              loop
            />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>True Maid</Text>
            <Text style={{fontSize: 16, marginTop:10 }}>India's No.1 Maid Finder App</Text>
          </View>
        </>
      ) : (
        <NavigationProvider />
      )}
    </SafeAreaProvider>
  );
};

export default App;
