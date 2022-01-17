import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './../utils/storage';

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

const signOut = () => {
  AsyncStorage.clear();
  return true;
};

export default {
  signIn,
  signUp,
  signOut
};