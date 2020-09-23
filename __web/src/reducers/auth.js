import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
