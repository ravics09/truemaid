import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const HEIGHT = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import styles from './styles';

const Profile = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerSections}>
          <Text style={styles.headerTitle}>Welcome back User</Text>
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
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Profile </Text>
          <Text style={styles.footerSubTitle}>
            Edit personal info, change password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Photo </Text>
          <Text style={styles.footerSubTitle}>
            Upload, edit or remove profile photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Addresses </Text>
          <Text style={styles.footerSubTitle}>
            Edit, add or remove addresses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Wallet </Text>
          <Text style={styles.footerSubTitle}>
            True Maid wallet history and redeemed gift cards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
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
