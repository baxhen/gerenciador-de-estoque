import * as constants from './constants';

export const getAuth = () => ({
  type: constants.GET_AUTH,
});

export const getAuthSuccess = (payload) => ({
  type: constants.GET_AUTH_SUCCESS,
  payload,
});

export const signUserUp = () => ({
  type: constants.SIGN_UP,
});

export const getAuthError = (payload) => ({
  type: constants.GET_AUTH_ERROR,
  payload,
});
export const logOut = () => {
  return {
    type: constants.LOGOUT,
  };
};

export const recoverPassword = () => ({
  type: constants.RECOVER_PASSWORD,
});
export const recoverPasswordSuccess = (payload) => ({
  type: constants.RECOVER_PASSWORD_SUCCESS,
  payload,
});
export const recoverPasswordError = (payload) => ({
  type: constants.RECOVER_PASSWORD_ERROR,
  payload,
});

export const resetPassword = () => ({
  type: constants.RESET_PASSWORD,
});

export const resetPasswordFeedback = (payload) => ({
  type: constants.RESET_PASSWORD_FEEDBACK,
  payload,
});
