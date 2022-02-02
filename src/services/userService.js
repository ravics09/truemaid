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

const updatePassword = user => {
  return axiosObject.put(`/resetpassword/${user.id}`, user).then(
    response => {
      if (response.data.status === 200) {
        return {
          status: 'success',
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

const updatePhoto = (user, id) => {
  return axiosObject.put(`/uploadprofilephoto/${id}`, user).then(
    response => {
      if (response.status === 200) {
        return {
          user: response.data.user,
          status: 'success',
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

const addToListedMaid = user => {
  return axiosObject.put(`/addtolistedmaid/${user.id}`, user).then(
    response => {
      if (response.data.status === 200) {
        return {
          status: 'success',
          message: 'Maid Added to listed section!',
          user: response.data.user,
        };
      } else if(response.data.status === 400){
        console.log("Maid already added");
        return {
          status: 'repeated',
          message: 'Maid Already Added in the list!',
          user: response.data.user,
        };
      }
    },
    error => {
      if (error.response.status === 400) {
        return {
          status: 'repeated',
          message: 'Maid Already Added in the list!'
        };
      } else {
        return {status: 'failed', message: 'Server Not Responding'};
      }
    },
  );
};

const removeFromListedMaid = user => {
  return axiosObject.put(`/removefromlistedmaid/${user.id}`, user).then(
    response => {
      if (response.data.status === 200) {
        return {
          status: 'success',
          message: 'Maid Successfully Removed From The List!',
          user: response.data.user,
        };
      }
    },
    error => {
      if (error.response.status === 400) {
        return {
          status: 'Failed',
          message: 'Maid Not Exist In The List'
        };
      } else {
        return {status: 'failed', message: 'Server Not Responding'};
      }
    },
  );
};

export default {
  getProfile,
  editProfile,
  updatePassword,
  updatePhoto,
  addToListedMaid,
  removeFromListedMaid
};
