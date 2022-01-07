import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';

import styles from './styles';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {}, []);

  const onUpdatePassword = () => {
    const user = {
      password,
      confirmPassword
    };
  };

  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <Input
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        style={styles.inputField}
      />
      <Button
        title="Update Password"
        buttonStyle={styles.customBtn}
        containerStyle={styles.buttonContainer}
        titleStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => onUpdatePassword()}
      />
    </View>
  );
};

export default ResetPassword;
