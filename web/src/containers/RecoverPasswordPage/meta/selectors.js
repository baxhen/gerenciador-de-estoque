import { initialState } from './reducer';
/**
 * Get RecoverPassword
 * @param state
 * @returns {Object}
 */
export const get = state => state.RecoverPassword || initialState;
