import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_FAIL,
  SIGNOUT,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAIL,
  MAID_ADDED_TO_LIST_SUCCESS,
  MAID_ADDED_TO_LIST_FAIL,
} from '../actions/type';
import Storage from '../utils/storage';

const user = Storage.getItem('trueMaidUser');
const initialState = user
  ? {isLoggedIn: false, user}
  : {isLoggedIn: false, user: null};

export default auth = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
      };
    case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case UPDATE_PHOTO_FAIL:
      return {
        ...state,
      };
    case MAID_ADDED_TO_LIST_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case MAID_ADDED_TO_LIST_FAIL:
      return {
        ...state,
      };
    case SIGNOUT:
      console.log('SIGNOUT CALLED');
      return {
        state: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
