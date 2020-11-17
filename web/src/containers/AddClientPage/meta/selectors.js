import { initialState } from './reducer'
/**
 * Get AddClient
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.AddClient || initialState
