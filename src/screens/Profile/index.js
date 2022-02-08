import React, {useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning
import {MAID_UPDATE_SUCCESS} from '../../actions/type';
import Storage from '../../utils/storage';
import MaidService from '../../services/maidService';
import styles from './styles';

const Profile = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const {maidData} = useSelector(state => state.maid);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    async function fetchMaidData(maidId) {
      await MaidService.fetchMaid(maidId).then(res => {
        if (isSubscribed) {
          Storage.setItem('trueMaidMaid', JSON.stringify(res.maid));
          dispatch({
            type: MAID_UPDATE_SUCCESS,
            payload: {maid: res.maid},
          });
        }
      });
    }

    if (user) {
      if (user.isMaid && !maidData._id) {
        fetchMaidData(user.maidId);
      }
    }
    return () => (isSubscribed = false);
  }, [user]);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>
            Welcome back {user ? user.fullName : null}
          </Text>
          <Text style={styles.headerSubTitle}>
            here are your TrueMaid membership details-
          </Text>
        </View>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>Current Plan</Text>
          <Text style={styles.headerSubTitle}>You Are Using Free Plan, With Direct Chat To Maid</Text>
        </View>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>With True Maid Membership</Text>
          <Text style={styles.headerSubTitle}>Get Direct Call To Maid Permission And Unlimited Maid Data Access</Text>
        </View>
      </View>
      <ScrollView style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Profile </Text>
          <Text style={styles.footerSubTitle}>
            Edit contact, address information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfilePhoto')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Profile Photo</Text>
          <Text style={styles.footerSubTitle}>
            Add, Remove or Update Profile Photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditMaidDetails')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Are You Maid ?</Text>
          <Text style={styles.footerSubTitle}>
            If you are maid verify you aadhar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPassword')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Change Password </Text>
          <Text style={styles.footerSubTitle}>Change true maid password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subscription')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Update Membership </Text>
          <Text style={styles.footerSubTitle}>
          You Are Using Free Plan
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Profile;
