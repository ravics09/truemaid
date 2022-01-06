import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import styles from './styles';

const Profile = ({navigation}) => {
  const { user } = useSelector(state=>state.auth);

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
            Edit personal info, change password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Photo </Text>
          <Text style={styles.footerSubTitle}>
            Upload, edit or remove profile photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>My Addresses </Text>
          <Text style={styles.footerSubTitle}>
            Edit, add or remove addresses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.footerSection}>
          <Text style={styles.footerTitle}>Verify Aadhar </Text>
          <Text style={styles.footerSubTitle}>
            Each maid need to verify aadhar status.
          </Text>
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
