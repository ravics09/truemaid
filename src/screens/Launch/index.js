import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

import * as OnboardingImage from './../../constant/imagePath';
import styles from './styles';

const Launch = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.appdName}>
        <Image source={OnboardingImage.OnboardingImg2} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.buttonSection}>
          <Text style={styles.appTitle}>True Maid</Text>
          <Text style={styles.subtitle}>India's No.1 Maid Finder App</Text>
          <Button
            title="Sign In"
            loading={isSubmit}
            buttonStyle={styles.customButtn}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => navigation.replace('SignIn')}
          />
          <Button
            title="Sign Up"
            loading={isSubmit}
            buttonStyle={styles.customButtn}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => navigation.replace('SignUp')}
          />
        </View>
      </View>
    </>
  );
};

export default Launch;
