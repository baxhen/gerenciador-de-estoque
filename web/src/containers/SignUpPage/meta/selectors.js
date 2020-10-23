import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the SignUp state domain
 */

const selectSignUpDomain = (state) => state.form.signup.values || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () =>
  createSelector(selectSignUpDomain, (substate) => {
    return substate
  })

export default makeSelectSignUp
export { selectSignUpDomain }
