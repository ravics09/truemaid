import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {signout} from './../../actions/auth';

const Setting = () => {
  const dispatch = useDispatch();

  const OnSignOut = () => {
    dispatch(signout()).then(response => {
      setTimeout(() => {
        setLoading(false);
        navigation.replace('Auth');
      }, 3000);
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}} onPress={() => OnSignOut()}>
        Logout
      </Text>
    </View>
  );
};

export default Setting;
