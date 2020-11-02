import { initialState } from './reducer'
/**
 * Get AddProduct
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.AddProduct || initialState
