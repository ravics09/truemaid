import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';
import {addtolistedmaid} from './../../actions/auth';
import styles from './styles';

const MaidDetail = ({navigation, route}) => {
  const {maidDetails} = route.params;
  const [maidData, setMaidData] = useState([]);
  const [maidFullData, setMaidFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setMaidFullData(maidDetails);
    setMaidData(maidDetails.userInfo);
  }, []);

  onSave = (maidId, maidName, maidSalary) => {
    setIsLoading(true);
    const updatedUserInfo = {
      id: user._id,
      maidId,
      maidName, 
      maidSalary,
    };

    dispatch(addtolistedmaid(updatedUserInfo))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setIsLoading(false);
            alert('Maid Successfully Added to Listed Section');
          }, 3000);
        } else if(response.status === 'repeated'){
          setTimeout(() => {
            setIsLoading(false);
            alert('Maid Already Added in the list!');
          }, 3000);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Somthing is wrong');
      });
  };

  if (maidData.profilePhoto) {
    var imgstr = maidData.profilePhoto;
    imgstr = imgstr.replace('public', '');
    var profilePic = 'http://localhost:9090' + imgstr;
  }

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={profilePic ? {uri: profilePic} : null}
              style={styles.userImage}
            />
            <Text style={styles.headerTitle}>{maidData.fullName}</Text>
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={styles.basicInfo}>
              <Text style={styles.headerTitle}>Location Info</Text>
              <Text style={styles.subTitle}>City: {maidData.city}</Text>
              <Text style={styles.subTitle}>Pincode: {maidData.pincode}</Text>
              <Text style={styles.subTitle}>State: {maidData.stateInfo}</Text>
            </View>

            <View style={styles.advanceInfo}>
              <Text style={styles.headerTitle}>Other Info</Text>
              <Text style={styles.subTitle}>Salary: {maidFullData.salary}</Text>
              <Text style={styles.subTitle}>
                Status: {maidFullData.aadhar ? 'Verified' : 'Not Verified'}
              </Text>
              <Text style={styles.subTitle}>
                Experience: {maidFullData.experience} Year
              </Text>
              <Text style={styles.subTitle}>Field: {maidFullData.field}</Text>
              <Text style={styles.subTitle}>
                Languages: {maidFullData.languages}
              </Text>
              <Text style={styles.subTitle}>
                Available On: {maidFullData.availabilityDate}
              </Text>
            </View>

            <Button
              title="Add To List"
              onPress={() => onSave(maidFullData._id, maidData.fullName, maidFullData.salary)}
              buttonStyle={styles.customButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: '#181D3D'}}
            />

            <Button
              title="Start Chat"
              onPress={() => navigation.navigate('Chat')}
              buttonStyle={styles.customButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: '#181D3D'}}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MaidDetail;
