import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAIL
} from '../actions/type';
import Storage from '../utils/storage';

const user = Storage.getItem('trueMaidUser');
const initialState = user
  ? {isLoggedIn: true, user}
  : {isLoggedIn: false, user: null};

export default auth = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...initialState,
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
        ...initialState,
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
        ...initialState,
        user: payload.user,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
      };
      case UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: payload.user,
      };
    case UPDATE_PHOTO_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
