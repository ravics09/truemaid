import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './../utils/storage';

const BASE_URL = 'http://localhost:9090/user';

export let axiosObject = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const getProfile = id => {
  return axiosObject.get(`/getprofile/${id}`).then(
    response => {
      console.log('getProfile in auth service', response.data.user);
      if (response.status === 200) {
        return {
          status: 'success',
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

const editProfile = user => {
  return axiosObject.put(`/editprofile/${user.id}`, user).then(
    response => {
      console.log('editprofile reponse in user service', response);
      if (response.data.status === 200) {
        return {
          status: 'success',
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

export default {
  getProfile,
  editProfile
};
