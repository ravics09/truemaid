import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import UserService from '../../services/userService';

import styles from './styles';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {user} = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const onUpdatePassword = async () => {
    setIsLoading(true);
    const userInfo = {
      id: user._id,
      password,
      confirmPassword,
    };
    const result = await UserService.updatePassword(userInfo);

    if (result.status === 'success') {
      alert('password updated successfully');
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={{flex: 1, paddingVertical: 20}}>
          <Input
            placeholder="Password"
            value={password}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            autoCapitalize="none"
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
      )}
    </>
  );
};

export default ResetPassword;
