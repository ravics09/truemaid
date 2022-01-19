import axios from 'axios';
import Storage from './../utils/storage';

const BASE_URL = 'http://localhost:9090/maid';

export let axiosObject = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const createMaid = user => {
  return axiosObject.post(`/createmaid/${user.id}`, user).then(
    response => {
      if (response.data.status === 200) {
        console.log(
          '===========createMaid service maid data coming from backend===========',
          response.data.maid,
        );
        Storage.setItem('trueMaidMaid', JSON.stringify(response.data.maid));
        return {
          status: 'success',
          maid: response.data.maid,
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

const editMaid = maidinfo => {
  return axiosObject.put(`/editmaid/${maidinfo.id}`, maidinfo).then(
    response => {
      if (response.data.status === 200) {
        return {
          status: 'success',
          maid: response.data.maid,
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

const fetchMaid  = id => {
  return axiosObject.get(`/getmaiddetail/${id}`).then(
    response => {
      console.log("fetch details of maid",response.data);
      if (response.data.status === 200) {
        return {
          status: 'success',
          maid: response.data.maid,
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

const fetchAllMaid = () => {
  return axiosObject.get(`/getallmaids`).then(
    response => {
      console.log("fetch details of all maids",response.data.maids);
      if (response.data.status === 200) {
        return {
          status: 'success',
          maids: response.data.maids,
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
  createMaid,
  editMaid,
  fetchMaid,
  fetchAllMaid
};
