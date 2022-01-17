import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
  SET_MESSAGE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL
} from './type';
import AuthService from '../services/authService';
import UserService from '../services/userService';

export const signup = user => dispatch => {
  return AuthService.signUp(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: SIGNUP_SUCCESS,
        });
  
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: SIGNUP_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};

export const signin = user => dispatch => {
  return AuthService.signIn(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: {user: response.user},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: SIGNIN_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};

export const signout = () => dispatch => {
  AuthService.signOut();

  dispatch({
    type: SIGNOUT,
  });
};

export const editprofile = user => dispatch => {
  return UserService.editProfile(user).then(
    response => {
      if (response.status === 'success') {
        console.log('user updated info in action side', response.user);
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: {user: response.user},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: USER_UPDATE_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};
