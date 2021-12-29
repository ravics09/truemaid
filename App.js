import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import NavigationProvider from './src/navigation';
import LottieView from 'lottie-react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
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
              source={require('./src/assets/maid3.json')}
              autoPlay
              loop
            />
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>True Maid</Text>
          </View>
        </>
      ) : (
        <NavigationProvider />
      )}
    </>
  );
};

export default App;
