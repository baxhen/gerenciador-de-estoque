import { initialState } from './reducer'
/**
 * Get SuppliersPage
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.SuppliersPage || initialState
