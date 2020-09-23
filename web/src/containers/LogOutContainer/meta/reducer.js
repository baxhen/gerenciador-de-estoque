import produce from 'immer';
import * as constants from './constants';

export const initialState = {};

/* eslint-disable no-param-reassign */
const LogOut = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log('reducer', action);
    switch (action.type) {
      default:
        break;
    }
  });

export default LogOut;
