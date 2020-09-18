import api from 'services/api';
import { ActionTypes } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await api.post('/api/signup', formProps);

    dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: ActionTypes.AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await api.post('/api/signin', formProps);

    dispatch({ type: ActionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: ActionTypes.AUTH_ERROR,
      payload: 'Invalid login credentials',
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: ActionTypes.AUTH_USER,
    payload: '',
  };
};
