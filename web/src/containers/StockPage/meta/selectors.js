import { initialState } from './reducer'
/**
 * Get Stock
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.Stock || initialState
