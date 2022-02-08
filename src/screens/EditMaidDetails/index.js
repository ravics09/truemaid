import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import {createmaid, editmaid} from './../../actions/maid';
import styles from './styles';

const EditMaidDetails = () => {
  const [aadhar, setAadhar] = useState();
  const [OTP, setOTP] = useState('');
  const [experience, setExperience] = useState();
  const [field, setField] = useState('');
  const [salary, setSalary] = useState();
  const [reference, setReference] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [languages, setLanguages] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPVerified, setOTPVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaidExist, setIsMaidExist] = useState(false);
  const {maidData} = useSelector(state => state.maid);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      aadhar,
      experience,
      field,
      salary,
      reference,
      availabilityDate,
      languages,
    } = maidData;

    if (maidData._id) {
      setIsLoading(true);
      setIsMaidExist(true);
      fetchUserDetail();
    }

    function fetchUserDetail() {
      let aadharNo = aadhar ? aadhar.toString() : '';
      let experienceInfo = experience ? experience.toString() : '';
      let salaryInfo = salary ? salary.toString() : '';
      let referenceInfo = reference ? reference.toString() : '';

      setAadhar(aadharNo);
      setSalary(salaryInfo);
      setExperience(experienceInfo);
      setReference(referenceInfo);
      setField(field ? field : '');
      setAvailabilityDate(availabilityDate ? availabilityDate : '');
      setLanguages(languages ? languages : '');
      setIsLoading(false);
    }
   
  }, [user, maidData]);

  const onUpdateMaid = () => {
    setIsLoading(true);
    const maidInfo = {
      id: maidData._id,
      aadhar,
      experience,
      field,
      salary,
      reference,
      availabilityDate,
      languages,
    };
    dispatch(editmaid(maidInfo))
      .then(response => {
        if (response.status === 'success') {
          setIsLoading(false);
          alert('maid information updated successfully');
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Somthing is wrong');
      }); 
  };

  const onCreateMaid = () => {
    setIsLoading(true);
    const maidInfo = {
      id: user._id,
      aadhar,
      experience,
      field,
      salary,
      reference,
      availabilityDate,
      languages,
    };

    dispatch(createmaid(maidInfo))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setIsLoading(false);
            alert('maid information added successfully');
          }, 3000);
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Somthing is wrong');
      });
  }

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
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <ScrollView style={{flex: 1, paddingVertical: 20}}>
          <Input
            value={user.userName}
            placeholder="usename"
            style={styles.inputField}
            disabled={true}
          />
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
              buttonStyle={styles.customButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: 'black'}}
              onPress={() => onSentOTP()}
              disabled={isOTPSent}
            />
          )}
          {isOTPSent ? (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Input
                placeholder="OTP"
                value={OTP}
                onChangeText={text => setOTP(text)}
                style={styles.inputField}
              />
              <Button
                title="Verify"
                buttonStyle={styles.customButton}
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
            title={isMaidExist? "Update": "Add"}
            buttonStyle={styles.customButton}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => isMaidExist? onUpdateMaid(): onCreateMaid()}
          />
        </ScrollView>
      )}
    </>
  );
};

export default EditMaidDetails;
