import axios from 'axios';
import Storage from './../utils/storage';
import {Platform} from 'react-native';

const BASE_URL = 'http://localhost:9090/user';

export let axiosObject = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const signIn = async user => {
  return axiosObject.post('/signin', user).then(
    response => {
      if (response.data.status === 200) {
        Storage.setItem('trueMaidUser', JSON.stringify(response.data.user));
        Storage.setItem('accessToken', response.data.accessToken);

        return {
          status: 'success',
          message: 'You are redirecting to home page',
          user: response.data.user,
        };
      }
    },
    error => {
      if (error.response) {
        return {status: 'failed', message: error.response.data};
      } else {
        return {status: 'failed', message: 'Server Not Responding'};
      }
    },
  );
};

const signUp = user => {
  return axiosObject.post('/signup', user).then(
    response => {
      if (response.data.status === 200) {
        return {
          status: 'success',
          message:
            'You have successfully signed up! Now you should be able to sign in.',
        };
      }
    },
    error => {
      if (error.response) {
        return {status: 'failed', message: error.response.data};
      } else {
        return {status: 'failed', message: 'Server Not Responding'};
      }
    },
  );
};

const signOut = async () => {
  await Storage.removeItem('trueMaidUser');
  await Storage.removeItem('accessToken');
  return {
    status: 'success'
  };

  // const asyncStorageKeys = await Storage.getAllKeys();
  // if (asyncStorageKeys.length > 0) {
  //   if (Platform.OS === 'android') {
  //     await Storage.removeAll();
  //     console.log("storage info removed from android device");
  //     return {
  //       status: 'success'
  //     };
  //   }
  //   if (Platform.OS === 'ios') {
  //     await Storage.multiRemove(asyncStorageKeys);
  //     console.log("storage info removed from ios device");
  //     return {
  //       status: 'success'
  //     };
  //   }
  // }
};

const generatePaymentToken = async (orderId, amount) => {
 let payload = JSON.stringify({
   orderId: orderId,
   amount: amount
 });

 return axiosObject.post('/generatepaymenttoken', payload).then(
  response => {
    if (response.data.status === 200) {
      return {
        status: 'success',
        token: response.data.token,
      };
    }
  },
  error => {
    if (error.response) {
      return {status: 'failed', message: error.response.data};
    } else {
      return {status: 'failed', message: 'Server Not Responding'};
    }
  },
);

}

export default {
  signIn,
  signUp,
  signOut,
  generatePaymentToken
};
