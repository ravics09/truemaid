import React, {useState, useEffect} from 'react';
import {View, Text, Image, Modal, ActivityIndicator} from 'react-native';
import {Input, Button, CheckBox} from 'react-native-elements';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import {useSelector, useDispatch} from 'react-redux';
import { CALLBACK_URL, MID, URL_SCHEME } from '../../constant/paytmTest';
import AuthService from '../../services/authService';
import * as FilterImage from './../../constant/imagePath';
import styles from './styles';

const Subscription = () => {
  const [check, setCheck] = useState(false);
  const {user} = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onContinue = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    // console.log("user id==",user._id);
  }, []); 

  const onPayment = async () => {
    setIsLoading(true);

    let orderId = '123434343434343787874';
    let amount = '100';

    let payload = {
      orderId,
      userId: user._id,
      amount,
    }

    const tokenData = await AuthService.generatePaymentToken(payload);
    console.log("token",tokenData.token);

    AllInOneSDKManager.startTransaction(
      orderId,
      MID,
      tokenData.token,
      amount,
      CALLBACK_URL+orderId,
      true,
      true,
      URL_SCHEME
    )
      .then(result => {
        console.log('Result of Payment', result);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Error in Payment', result);
      });
  };
  return (
    <>
      {modalVisible ? (
        <View style={styles.centeredView}>
          {isLoading ? (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="orange" />
            </View>
          ) : (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Choose Payment Method</Text>
                  <Input
                    value="100"
                    disabled="true"
                    style={styles.inputField}
                  />
                  <Button
                    title="Pay"
                    buttonStyle={styles.payButton}
                    containerStyle={styles.buttonContainer}
                    titleStyle={{fontWeight: 'bold', color: 'white'}}
                    onPress={() => onPayment()}
                  />
                  <Button
                    title="Cancel"
                    buttonStyle={styles.payButton}
                    containerStyle={styles.buttonContainer}
                    titleStyle={{fontWeight: 'bold', color: 'white'}}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </Modal>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.headerTitle}>
              Unlock {'\n'}Unlimited True Maid Access
            </Text>
            <Text style={styles.headerSubTitle}>
              1. Unlimited Maid Data Access
            </Text>
            <Text style={styles.headerSubTitle}>
              2. Don't Need To Waste Time On Chating
            </Text>
            <Text style={styles.headerSubTitle}>
              3. Get Direct Call Access To Maid
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Image source={FilterImage.Plan} style={styles.customImg} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.headerSubTitle}>Say Hey To Maid</Text>
            <CheckBox
              title="Rs.100 For Lifetime Access"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check}
              textStyle={{color: '#181D3D'}}
              containerStyle={styles.checkboxContainer}
              onPress={() => setCheck(!check)}
            />
            <Button
              title="Continue"
              disabled={!check}
              buttonStyle={styles.customButton}
              containerStyle={styles.buttonContainer}
              titleStyle={{fontWeight: 'bold', color: 'black'}}
              onPress={() => onContinue()}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Subscription;
