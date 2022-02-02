import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';
import MaidService from '../../services/maidService';
import styles from './styles';

const ListedMaidDetail = ({navigation, route}) => {
  const {maidId} = route.params;
  const [maidData, setMaidData] = useState([]);
  const [maidFullData, setMaidFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);

    async function fetchMaidDetails() {
      await MaidService.fetchMaid(maidId).then(res => {
        console.log('Maid data fetched', res.maid);
        if (isSubscribed) {
          setMaidFullData(res.maid);
          setMaidData(res.maid.userInfo);
          setIsLoading(false);
        }
      });
    }
    fetchMaidDetails();
    return () => (isSubscribed = false);
  }, []);

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
        <>
          {maidFullData ? (
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
                  <Text style={styles.subTitle}>
                    Pincode: {maidData.pincode}
                  </Text>
                  <Text style={styles.subTitle}>
                    State: {maidData.stateInfo}
                  </Text>
                </View>

                <View style={styles.advanceInfo}>
                  <Text style={styles.headerTitle}>Other Info</Text>
                  <Text style={styles.subTitle}>
                    Salary: {maidFullData.salary}
                  </Text>
                  <Text style={styles.subTitle}>
                    Status: {maidFullData.aadhar ? 'Verified' : 'Not Verified'}
                  </Text>
                  <Text style={styles.subTitle}>
                    Experience: {maidFullData.experience} Year
                  </Text>
                  <Text style={styles.subTitle}>
                    Field: {maidFullData.field}
                  </Text>
                  <Text style={styles.subTitle}>
                    Languages: {maidFullData.languages}
                  </Text>
                  <Text style={styles.subTitle}>
                    Available On: {maidFullData.availabilityDate}
                  </Text>
                </View>
                <Button
                  title="Start Chat"
                  onPress={() => navigation.navigate('Chat')}
                  buttonStyle={styles.customButton}
                  containerStyle={styles.buttonContainer}
                  titleStyle={{fontWeight: 'bold', color: '#181D3D'}}
                />
              </ScrollView>
            </View>
          ) : null}
        </>
      )}
    </>
  );
};

export default ListedMaidDetail;
