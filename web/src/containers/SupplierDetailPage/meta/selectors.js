import { initialState } from './reducer'
/**
 * Get SupplierDetail
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.SupplierDetail || initialState
