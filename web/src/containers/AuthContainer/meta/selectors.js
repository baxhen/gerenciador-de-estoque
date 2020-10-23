// import { createSelector } from 'reselect';
import { initialState } from './reducer'
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const selectAuth = (state) => state.auth || initialState

const selectIsAuthenticated = (state) => selectAuth(state).isAuthenticated

const selectRecoverPasswordMessage = (state) =>
  selectAuth(state).recoverPasswordMessage
const selectResetPasswordMessage = (state) =>
  selectAuth(state).resetPasswordMessage
const selectSignUpSuccessMessage = (state) =>
  selectAuth(state).signUpSuccessMessage
const selectSignUpErrorMessage = (state) => selectAuth(state).signUpErrorMessage
const selectVerifyEmailMessage = (state) => selectAuth(state).verifyEmailMessage

export {
  selectAuth,
  selectIsAuthenticated,
  selectRecoverPasswordMessage,
  selectResetPasswordMessage,
  selectSignUpSuccessMessage,
  selectSignUpErrorMessage,
  selectVerifyEmailMessage,
}
