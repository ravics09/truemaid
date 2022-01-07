import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  const onUpdate = () => {};

  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
      <Input
        placeholder="Username"
        onChangeText={text => setFullname(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Full Name"
        onChangeText={text => setFullname(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Mobile"
        onChangeText={text => setMobile(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="City"
        onChangeText={text => setCity(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="State"
        onChangeText={text => setState(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Pincode"
        onChangeText={text => setPincode(text)}
        style={styles.inputField}
      />
      <Button
        title="Update"
        buttonStyle={styles.signInButton}
        containerStyle={styles.buttonContainer}
        titleStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => onUpdate()}
      />
    </View>
  );
};

export default EditProfile;
