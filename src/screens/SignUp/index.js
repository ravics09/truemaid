import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

import {signup} from './../../actions/auth';
import styles from './styles';

const SignUp = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onSignUp = () => {
    setIsSubmit(true);
    setIsLoading(true);

    let user = {
      userName: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    dispatch(signup(user))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setIsLoading(false);
            navigation.replace('SignIn');
          }, 3000);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.appdName}>
          <Text style={styles.welcomeText}>Create New Account</Text>
        </View>
      </View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.formSection}>
            <Input
              placeholder="Username"
              value={username}
              autoCapitalize="none"
              onChangeText={text => setUsername(text)}
              style={styles.inputField}
            />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              style={styles.inputField}
            />
            <Input
              placeholder="Confirm Password"
              autoCapitalize="none"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
              style={styles.inputField}
            />
            <Button
              title="Sign Up"
              loading={isSubmit}
              buttonStyle={styles.signUpButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: 'black'}}
              onPress={() => onSignUp()}
            />
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                <Text style={styles.singUpLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default SignUp;
