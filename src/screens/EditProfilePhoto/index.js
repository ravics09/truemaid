import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Button} from 'react-native-elements';

import styles from './styles';

const EditProfilePhoto = () => {
  const onUpdatePhoto = () => {};
  return (
    <View styel={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Avatar
        size={64}
        rounded
        source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}}
        title="Bj"
        containerStyle={{backgroundColor: 'grey'}}
      />
      <Button
        title="Update Photo"
        buttonStyle={styles.customBtn}
        containerStyle={styles.buttonContainer}
        titleStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => onUpdatePhoto()}
      />
    </View>
  );
};

export default EditProfilePhoto;
