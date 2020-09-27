// import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const selectAuth = (state) => state.auth || initialState;

const selectIsAuthenticated = (state) => selectAuth(state).isAuthenticated;

const selectRecoverPasswordMessage = (state) =>
  selectAuth(state).recoverPasswordMessage;
const selectResetPasswordMessage = (state) =>
  selectAuth(state).resetPasswordMessage;

export {
  selectAuth,
  selectIsAuthenticated,
  selectRecoverPasswordMessage,
  selectResetPasswordMessage,
};
