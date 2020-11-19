import { initialState } from './reducer'
/**
 * Get Stock
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.stockPage || initialState
export const selectStock = (state) => get(state).stock
