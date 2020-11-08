import { initialState } from './reducer'
/**
 * Get SuppliersPage
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.suppliersPage || initialState

const selectSuppliers = (state) => get(state).suppliers

const selectAddSupplierErrorMessage = (state) =>
  get(state).addSupplierErrorMessage

const selectSupplier = (state, _id) =>
  selectSuppliers(state).filter((supplier) => supplier._id === _id)[0]

export { selectSuppliers, selectAddSupplierErrorMessage, selectSupplier }
