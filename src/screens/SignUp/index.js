import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as OnboardingImage from './../../utils/constant';

import styles from './styles';

const SignUp = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = () => {
    setIsSubmit(true);
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.appdName}>
          <Text style={styles.welcomeText}>Create New Account</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.formSection}>
          <Input placeholder="Username" onChangeText={setUsername} style={styles.inputField}/>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            style={styles.inputField}
          />
        <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            style={styles.inputField}
          />
          <Button
            title="Sign Up"
            loading={isSubmit}
            buttonStyle={styles.signUpButton}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black',}}
            onPress={() => onSubmitHandler()}
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Text style={styles.singUpLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
