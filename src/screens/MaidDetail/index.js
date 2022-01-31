import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';

const MaidDetail = ({route}) => {
  const {maidDetails} = route.params;
  const [maidData, setMaidData] = useState([]);
  const [maidFullData, setMaidFullData] = useState([]);

  useEffect(() => {
    setMaidFullData(maidDetails);
    setMaidData(maidDetails.userInfo);
  }, []);

  if (maidData.profilePhoto) {
    var imgstr = maidData.profilePhoto;
    imgstr = imgstr.replace('public', '');
    var profilePic = 'http://localhost:9090' + imgstr;
  }

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={profilePic ? {uri: profilePic} : null}
            style={styles.userImage}
          />
        </View>
        <View style={styles.basicInfo}>
          <Text style={styles.headerTitle}>Basic Info</Text>
          <Text style={styles.subTitle}>Name: {maidData.fullName}</Text>
          <Text style={styles.subTitle}>Mobile: {maidData.mobile}</Text>
          <Text style={styles.subTitle}>City: {maidData.city}</Text>
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
    </View>
  );
};

export default MaidDetail;
