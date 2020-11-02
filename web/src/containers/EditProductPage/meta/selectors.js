import { initialState } from './reducer'
/**
 * Get EditProduct
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.EditProduct || initialState
