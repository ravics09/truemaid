import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as OnboardingImage from './../../utils/constant';

import styles from './styles';

const SignIn = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = () => {
    setIsSubmit(true);
  }
  return (
    <LinearGradient
      colors={['#F6D242', '#FF52E5']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome To True Maid</Text>
        <Text style={styles.welcomeSubtitle}>
          Please sign in to your account
        </Text>
      </View>
      <View style={styles.LogoContainer}>
        {/* <Image
          // style={{height: 300}}
          source={OnboardingImage.OnboardingImg2}
        /> */}
      </View>
      <View style={styles.body}>
        <Input
          placeholder="Username"
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => alert('You forget your password how?')}>
            <Text style={styles.footerText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Sign In"
          loading={isSubmit}
          buttonStyle={styles.signInButton}
          containerStyle={styles.buttonContainer}
          titleStyle={{fontWeight: 'bold'}}
          onPress={() => onSubmitHandler()}
        />
        <Button
          title="Sign In With Google"
          onPress={() => alert('You will redirect to home screen')}
          buttonStyle={styles.signInButton}
          containerStyle={styles.buttonContainer}
          titleStyle={{fontWeight: 'bold'}}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
            <Text style={styles.singUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignIn;
