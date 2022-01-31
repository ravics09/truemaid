import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Placeholder from '../constant/imagePath';
import {signout} from '../actions/auth';

const CustomDrawer = props => {
  const {user} = useSelector(state => state.auth);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    let isSubscribed = true;
    if(user && isSubscribed===true){
      setProfilePhoto(user.profilePhoto ? user.profilePhoto : null);
    }
    return () => (isSubscribed =  false);
  }, [user]);

  const OnSignOut = () => {
    dispatch(signout()).then(response => {
      if (response.status === 'success') {
        navigation.replace('Auth');
      }
    });
  };

  if (profilePhoto) {
    var imgstr = profilePhoto;
    imgstr = imgstr.replace('public', '');
    var profilePic = 'http://localhost:9090' + imgstr;
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#181D3D'}}>
        {user ? (
          <View style={{padding: 20, backgroundColor: '#181D3D'}}>
            <Image
              source={
                profilePic
                  ? {uri: profilePic}
                  : require('../assets/images/placeholder.png')
              }
              style={{
                padding: 20,
                height: 100,
                width: 100,
                borderRadius: 50,
                marginBottom: 10,
              }}
            />
            <Text
              style={{color: 'lightgray', fontSize: 20, fontWeight: 'bold'}}>
              {user.fullName ? user.fullName : user.userName}
            </Text>
            <Text style={{color: 'lightgray', fontSize: 18}}>
              {user.email ? user.email : null}
            </Text>
          </View>
        ) : null}
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          onPress={() => OnSignOut()}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
