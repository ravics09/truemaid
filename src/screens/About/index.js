import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>JavaScript Centric Pvt. Ltd</Text>
      <Text style={styles.subTitle}>We as technology enthusiasts, working on different problems. Few of our products:</Text>

      {/* <Text style={styles.headerTitle}>Few Apps</Text> */}
      <Text style={styles.subTitle}>True Maid</Text>
      <Text style={styles.subTitle}>DevAssist</Text>
    </View>
  );
};

export default AboutUs;
