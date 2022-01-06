import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import NavigationProvider from './src/navigation';
import LottieView from 'lottie-react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';

import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={{flex: 1}}>
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
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                  True Maid
                </Text>
                <Text style={{fontSize: 16, marginTop: 10}}>
                  India's No.1 Maid Finder App
                </Text>
              </View>
            </>
          ) : (
            <NavigationProvider />
          )}
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
