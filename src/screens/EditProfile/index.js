import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import styles from './styles';
import {editprofile} from './../../actions/auth';

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState('');
  const [stateInfo, setStateInfo] = useState('');
  const [pincode, setPincode] = useState();
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const {_id, mobile, fullName, email, city, stateInfo, pincode} = user;

    async function fetchUserDetail() {
      let mobileNo = mobile ? mobile.toString() : '';
      let pinCode = pincode ? pincode.toString() : '';

      setEmail(email ? email : '');
      setFullName(fullName ? fullName : '');
      setMobile(mobileNo);
      setCity(city ? city : '');
      setStateInfo(stateInfo ? stateInfo : '');
      setPincode(pinCode);
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchUserDetail();
  }, []);

  const onUpdate = () => {
    setIsLoading(true);

    const updatedUserInfo = {
      id: user._id,
      email,
      fullName,
      mobile,
      city,
      stateInfo,
      pincode,
    };

    dispatch(editprofile(updatedUserInfo))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setIsLoading(false);
            alert('User Data updated successfully');
          }, 3000);
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Somthing is wrong');
      });
  };

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
          <Input
            placeholder="Username"
            value={user.userName}
            onChangeText={text => setFullname(text)}
            style={styles.inputField}
            disabled={true}
          />
          <Input
            placeholder="Full Name"
            value={fullName}
            onChangeText={text => setFullName(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="Mobile"
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="City"
            value={city}
            onChangeText={text => setCity(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="State"
            value={stateInfo}
            onChangeText={text => setStateInfo(text)}
            style={styles.inputField}
          />
          <Input
            placeholder="Pincode"
            value={pincode}
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
      )}
    </>
  );
};

export default EditProfile;
