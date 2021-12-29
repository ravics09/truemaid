import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import styles from './styles';
import * as OnboardingImage from './../../utils/constant';

const Dot = ({selected}) => {
  let bgColor;
  bgColor = selected ? 'black' : 'gray';
  return <View style={[styles.dotStyle, {backgroundColor: bgColor}]} />;
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.otherStyle} {...props}>
    <Text style={styles.fontStyle}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.otherStyle} {...props}>
    <Text style={styles.fontStyle}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.otherStyle} {...props}>
    <Text style={styles.fontStyle}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dot}
      onSkip={() => navigation.replace('Auth')} //use replace in place of navigate
      onDone={() => navigation.replace('Auth')}
      pages={[
        {
          backgroundColor: '#addaed',
          image: <Image source={OnboardingImage.OnboardingImg1} />,
          title: 'Good & Reliable',
          subtitle: 'Find a good and reliable maid for your house',
        },
        {
          backgroundColor: '#fe898e',
          image: <Image source={OnboardingImage.OnboardingImg2} />,
          title: 'Couple Maid',
          subtitle: 'Husband and wife maid at economical rate',
        },
        {
          backgroundColor: '#f3f7fa',
          image: <Image source={OnboardingImage.ChildCareImg} />,
          title: 'Trusted Child Care',
          subtitle: 'Find a maid to take care of your child',
        },
        {
          backgroundColor: '#a3d7e4',
          image: <Image source={OnboardingImage.OldCareImg} />,
          title: 'Elderly Care',
          subtitle: 'Find a maid to take care of your elder ones',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
