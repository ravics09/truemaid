import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
const PlaceholderImg = require('../../assets/images/placeholder.png');
import {updatephoto} from './../../actions/auth';

import styles from './styles';

const EditProfilePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setProfilePhoto(user.profilePhoto ? user.profilePhoto: null);
  },[]);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.assets[0].uri) {
        setPhoto(response.assets[0]);
        setIsPhotoSelected(true);
      }
    });
  };

  const onUploadPhoto = () => {
    const data = new FormData();
    const body = {id: user._id};
    const id = user._id;
    setIsLoading(true);

    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    dispatch(updatephoto(data, id))
      .then(response => {
        if (response.status === 'success') {
          setTimeout(() => {
            setIsLoading(false);
            setProfilePhoto(response.profilePhoto);
            setIsPhotoSelected(false);
            alert('profile photo updated successfully');
          }, 2000);
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
        alert('Somthing is wrong');
      });
  };

  if (profilePhoto) {
    var imgstr = profilePhoto;
    imgstr = imgstr.replace("public", "");
    var profilePic = "http://localhost:9090" + imgstr;
  }

  return (
    <>
      {isLoading ? (
        <View styel={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View styel={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => handleChoosePhoto()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 50,
            }}>
            <View>
              <Text style={{paddingVertical: 10, color: 'white'}}>
                To Select Photo Click On Image
              </Text>
              {photo ? (
                <Image
                  source={{uri: photo.uri}}
                  style={{width: 200, height: 200}}
                />
              ) : (
                <Image
                  source={profilePic ? {uri:profilePic} : PlaceholderImg}
                  style={{width: 200, height: 200}}
                />
              )}
            </View>
          </TouchableOpacity>
          <Button
            title="Update Photo"
            disabled={!isPhotoSelected}
            buttonStyle={styles.customBtn}
            containerStyle={styles.buttonContainer}
            titleStyle={{fontWeight: 'bold', color: 'black'}}
            onPress={() => onUploadPhoto()}
          />
        </View>
      )}
    </>
  );
};

export default EditProfilePhoto;
