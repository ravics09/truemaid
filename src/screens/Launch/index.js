import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Launch = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
      <LinearGradient
        colors={['#F6D242', '#FF52E5']}
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={styles.appTitle}>True Maid</Text>
        <Text style={styles.subtitle}>India's No.1 Maid Finder App</Text>
        <Button
          title="Sign In"
          loading={isSubmit}
          buttonStyle={styles.customButtn}
          containerStyle={styles.buttonContainer}
          titleStyle={{fontWeight: 'bold'}}
          onPress={() => navigation.replace('SignIn')}
        />
        <Button
          title="Sign Up"
          loading={isSubmit}
          buttonStyle={styles.customButtn}
          containerStyle={styles.buttonContainer}
          titleStyle={{fontWeight: 'bold'}}
          onPress={() => navigation.replace('SignUp')}
        />
      </LinearGradient>
  );
};

export default Launch;
