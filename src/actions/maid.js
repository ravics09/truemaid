import {
  MAID_CREATE_SUCCESS,
  MAID_CREATE_FAIL,
  MAID_UPDATE_SUCCESS,
  MAID_UPDATE_FAIL,
} from './type';
import MaidService from '../services/maidService';

export const createmaid = user => dispatch => {
  return MaidService.createMaid(user).then(
    response => {
      console.log('=====create maid response from backend=====', response.maid);
      if (response.status === 'success') {
        dispatch({
          type: MAID_CREATE_SUCCESS,
          payload: {maid: response.maid},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: MAID_CREATE_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};

export const editmaid = maid => dispatch => {
  return MaidService.editMaid(maid).then(
    response => {
      console.log('=====edit maid action response from backend=====', response.maid);
      if (response.status === 'success') {
        dispatch({
          type: MAID_UPDATE_SUCCESS,
          payload: {maid: response.maid},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: MAID_UPDATE_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};
