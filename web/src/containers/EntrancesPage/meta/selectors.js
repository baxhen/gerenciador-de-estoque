import { initialState } from './reducer'
/**
 * Get Entrances
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.Entrances || initialState
