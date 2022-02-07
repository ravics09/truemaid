import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import {removefromlistedmaid} from './../../actions/auth';
import styles from './styles';

const Listed = ({navigation}) => {
  const [maidData, setMaidData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setMaidData(user.listedMaid);
  }, [user]);

  const openMaidDetails = id => {
    navigation.navigate('ListedMaidDetail', {maidId: id});
  };

  const onRemoveMaid = maid_Id => {
    console.log("maid id to remove", maid_Id);
    setIsLoading(true);
    const updatedUserInfo = {
      id: user._id,
      maid_Id
    };

    dispatch(removefromlistedmaid(updatedUserInfo))
    .then(response => {
      if (response.status === 'success') {
        setTimeout(() => {
          setIsLoading(false);
          alert('Maid Successfully Removed From List');
        }, 3000);
      }
    })
    .catch(() => {
      setIsLoading(false);
      alert('Somthing is wrong');
    });
  };

  const renderMaidList = ({item}) => {
    console.log("maid listed ",item);
    // if (item.userInfo.profilePhoto) {
    //   var imgstr = item.userInfo.profilePhoto;
    //   imgstr = imgstr.replace('public', '');
    //   var profilePic = 'http://localhost:9090' + imgstr;
    // }

    return (
      <TouchableOpacity onPress={() => openMaidDetails(item.maidId)}>
        <View key={item.key} style={[styles.card, styles.shadowProp]}>
        {/* <Image
            source={profilePic ? {uri: profilePic} : null}
            style={{width: 60, height: 60, borderRadius: 50}}
          /> */}
          <View>
            <Text style={styles.title}>{item.maidName}</Text>
            <Text style={styles.subTitle}>Salary: {item.maidSalary}</Text>
          </View>
          <View>
            <Button
              title="Remove"
              onPress={() => onRemoveMaid(item._id)}
              buttonStyle={styles.customButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: 'white'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={maidData}
            keyExtractor={(item, index) => index}
            renderItem={item => renderMaidList(item)}
          />
        </View>
      )}
    </>
  );
};

export default Listed;
