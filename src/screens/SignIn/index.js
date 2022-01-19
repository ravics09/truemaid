import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {signin} from './../../actions/auth';

import styles from './styles';

const SignIn = ({navigation}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSignIn = () => {
    setIsSubmit(true);
    setLoading(true);

    let user = {
      userName: username,
      password: password,
    };

    dispatch(signin(user))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setLoading(false);
            navigation.replace('MainStack');
          }, 3000);
        }
      })
      .catch(() => {
        setLoading(false);
        navigation.replace('Auth');
      });
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
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.formSection}>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => setUsername(text)}
              style={styles.inputField}
            />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
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
              onPress={() => onSignIn()}
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
      )}
    </ScrollView>
  );
};

export default SignIn;
