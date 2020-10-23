import produce from 'immer'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'

const { token } = getDataFromStorage()

export const initialState = {
  token,
  isAuthenticated: !!token,
}

/* eslint-disable no-param-reassign */
const Auth = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_AUTH_SUCCESS:
        draft.token = action.payload.token
        draft.isAuthenticated = true
        delete draft.signUpErrorMessage
        break
      case constants.LOGOUT:
        delete draft.token
        draft.isAuthenticated = false
        break
      case constants.GET_AUTH_FEEDBACK:
        draft.signUpSuccessMessage = action.payload.message
        break
      case constants.GET_AUTH_ERROR:
        draft.signUpErrorMessage = action.payload.message
        break
      case constants.RECOVER_PASSWORD_SUCCESS:
        draft.recoverPasswordMessage = action.payload.message
        break
      case constants.RECOVER_PASSWORD_ERROR:
        draft.recoverPasswordMessage = action.payload.message
        break
      case constants.RESET_PASSWORD_FEEDBACK:
        draft.resetPasswordMessage = action.payload.message
        break
      case constants.VERIFY_EMAIL_FEEDBACK:
        draft.verifyEmailMessage = action.payload.message
        break
      default:
        break
    }
  })

export default Auth
