import { initialState } from './reducer'
/**
 * Get EditClient
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.EditClient || initialState
