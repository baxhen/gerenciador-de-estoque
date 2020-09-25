import produce from 'immer';
import { getDataFromStorage } from '../../../utils/cookies';
import * as constants from './constants';

const { token } = getDataFromStorage();

export const initialState = {
  token,
  isAuthenticated: !!token,
};

/* eslint-disable no-param-reassign */
const Auth = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_AUTH_SUCCESS:
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        delete draft.errorMessage;
        break;
      case constants.LOGOUT:
        delete draft.token;
        draft.isAuthenticated = false;
        break;
      case constants.GET_AUTH_ERROR:
        draft.errorMessage = action.payload.message;
        break;
      default:
        break;
    }
  });

export default Auth;