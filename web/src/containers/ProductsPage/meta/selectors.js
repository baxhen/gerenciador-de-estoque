import { initialState } from './reducer'
/**
 * Get ProductsPage
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.ProductsPage || initialState
