import {
  MAID_CREATE_SUCCESS,
  MAID_CREATE_FAIL,
  MAID_UPDATE_SUCCESS,
  MAID_UPDATE_FAIL,
} from '../actions/type';
import Storage from '../utils/storage';

const maidData = Storage.getItem('trueMaidMaid');
const maidInitialState = maidData ? {maidData} : {maidData: null};

export default maid = (state = maidInitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case MAID_CREATE_SUCCESS:
      return {
        ...state,
        ...maidInitialState,
        maidData: payload.maid,
      };
    case MAID_CREATE_FAIL:
      return {
        ...state,
      };
    case MAID_UPDATE_SUCCESS:
      return {
        ...state,
        ...maidInitialState,
        maidData: payload.maid,
      };
    case MAID_UPDATE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
