import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAIL,
  MAID_ADDED_TO_LIST_SUCCESS,
  MAID_ADDED_TO_LIST_FAIL,
  MAID_REMOVED_FROM_LIST_SUCCESS,
  MAID_REMOVED_FROM_LIST_FAIL,
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
  return AuthService.signOut().then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: SIGNOUT,
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      Promise.reject();
      return message;
    },
  );
};

export const editprofile = user => dispatch => {
  return UserService.editProfile(user).then(
    response => {
      if (response.status === 'success') {
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

export const updatephoto = (user, id) => dispatch => {
  return UserService.updatePhoto(user, id).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: UPDATE_PHOTO_SUCCESS,
          payload: {user: response.user},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: UPDATE_PHOTO_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};

export const addtolistedmaid = user => dispatch => {
  return UserService.addToListedMaid(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: MAID_ADDED_TO_LIST_SUCCESS,
          payload: {user: response.user},
        });

        Promise.resolve();
        return response;
      } else if (response.status === 'repeated') {
        dispatch({
          type: MAID_ADDED_TO_LIST_FAIL,
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: MAID_ADDED_TO_LIST_FAIL,
      });

      Promise.reject();
      return message;
    },
  );
};

export const removefromlistedmaid = user => dispatch => {
  return UserService.removeFromListedMaid(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: MAID_REMOVED_FROM_LIST_SUCCESS,
          payload: {user: response.user},
        });

        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();

      dispatch({
        type: MAID_REMOVED_FROM_LIST_FAIL
      });

      Promise.reject();
      return message;
    },
  );
}
