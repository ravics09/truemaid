import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import * as OnboardingImage from './../../constant/imagePath';

import styles from './styles';

const SignIn = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = () => {
    setIsSubmit(true);
    setTimeout(() => {
      navigation.replace('SideDrawer');
    }, 2000);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.appdName}>
          <Text style={styles.welcomeText}>Welcome To True Maid</Text>
          <Text style={styles.welcomeSubtitle}>
            Please sign in to your account
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.formSection}>
          <Input
            placeholder="Username"
            onChangeText={setUsername}
            style={styles.inputField}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            style={styles.inputField}
          />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => alert('You forget your password how?')}>
              <Text style={styles.forgotPasswordText}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Sign In"
            loading={isSubmit}
            buttonStyle={styles.signInButton}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => onSubmitHandler()}
          />
          <Button
            title="Sign In With Google"
            onPress={() => alert('You will redirect to home screen')}
            buttonStyle={styles.signInButton}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
              <Text style={styles.singUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
