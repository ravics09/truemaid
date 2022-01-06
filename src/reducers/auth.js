import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_FAIL,
  SIGNOUT
} from '../actions/type';
import Storage from '../utils/storage';

const user = Storage.getItem('user');
const initialState = user
  ? {isLoggedIn: true, user}
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
    case SIGNOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
