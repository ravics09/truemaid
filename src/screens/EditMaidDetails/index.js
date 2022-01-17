import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

import styles from './styles';

const EditMaidDetails = () => {
  const {user} = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [OTP, setOTP] = useState('');
  const [experience, setExperience] = useState('');
  const [field, setField] = useState('');
  const [salary, setSalary] = useState('');
  const [reference, setReference] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [languages, setLanguages] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPVerified, setOTPVerified] = useState(false);

  useEffect(() => {
    const {userName} = user;
    setUsername(userName);
    //Populate all the fields if available
  }, []);

  const onSave = () => {
    const user = {
      username,
      aadhar,
      experience,
      field,
      salary,
      reference,
      availabilityDate,
      languages,
    };
    console.log('maid user details', user);
  };

  const onSentOTP = () => {
    setTimeout(() => {
      setIsOTPSent(true);
    }, 2000);
  };

  const onAadharVerify = () => {
    setTimeout(() => {
      setOTPVerified(true);
      setIsOTPSent(false);
    }, 3000);
  };

  return (
    <ScrollView style={{flex: 1, paddingVertical: 20}}>
      <Input value={username} style={styles.inputField} disabled={true} />
      <Input
        placeholder="Aadhar Number"
        value={aadhar}
        onChangeText={text => setAadhar(text)}
        style={styles.inputField}
        disabled={isOTPVerified}
      />
      {isOTPVerified ? null : (
        <Button
          title="Send OTP"
          // buttonStyle={styles.signInButton}
          containerStyle={styles.buttonContainer}
          titleStyle={{fontWeight: 'bold', color: 'black'}}
          onPress={() => onSentOTP()}
          disabled={isOTPSent}
        />
      )}
      {isOTPSent ? (
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Input
            placeholder="OTP"
            value={OTP}
            onChangeText={text => setOTP(text)}
            style={styles.inputField}
          />
          <Button
            title="Verify"
            buttonStyle={styles.customBtn}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => onAadharVerify()}
          />
        </View>
      ) : null}
      <Input
        placeholder="Experience"
        value={experience}
        onChangeText={text => setExperience(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Field"
        value={field}
        onChangeText={text => setField(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Salary Expectation"
        value={salary}
        onChangeText={text => setSalary(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Last Working Reference"
        value={reference}
        onChangeText={text => setReference(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Availability Date"
        value={availabilityDate}
        onChangeText={text => setAvailabilityDate(text)}
        style={styles.inputField}
      />
      <Input
        placeholder="Language Known"
        value={languages}
        onChangeText={text => setLanguages(text)}
        style={styles.inputField}
      />
      <Button
        title="Save"
        buttonStyle={styles.customBtn}
        containerStyle={styles.buttonContainer}
        titleStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => onSave()}
      />
    </ScrollView>
  );
};

export default EditMaidDetails;
