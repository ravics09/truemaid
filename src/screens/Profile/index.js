import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import styles from './styles';

const Profile = ({navigation}) => {
  const {user} = useSelector(state => state.auth);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>Welcome back {user.userName}</Text>
          <Text style={styles.headerSubTitle}>
            here are your TrueMaid membership details-
          </Text>
        </View>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>Current Plan</Text>
          <Text style={styles.headerSubTitle}>
            Save more with unlimited access plan - Rs.100
          </Text>
        </View>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>Date of Expiry</Text>
          <Text style={styles.headerSubTitle}>Tue Oct 09 2022</Text>
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
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Refer and Earn </Text>
          <Text style={styles.footerSubTitle}>
            Invite your friends and earn rewards
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Profile;
