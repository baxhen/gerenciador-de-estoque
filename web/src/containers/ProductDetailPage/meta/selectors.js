import { initialState } from './reducer'
/**
 * Get ProductDetail
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.ProductDetail || initialState
