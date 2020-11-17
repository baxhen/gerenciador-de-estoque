import { initialState } from './reducer'
/**
 * Get ClientDetail
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.ClientDetail || initialState
