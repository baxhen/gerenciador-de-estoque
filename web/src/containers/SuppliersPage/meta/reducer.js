import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  suppliers: [],
}

/* eslint-disable no-param-reassign */
const SuppliersPage = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_SUPPLIERS_SUCCESS:
        draft.suppliers = action.payload
        break
      case constants.ADD_SUPPLIER_ERROR:
        draft.addSupplierErrorMessage = action.payload.message
        break
      case constants.ADD_SUPPLIER_SUCCESS:
        draft.suppliers.push(action.payload)
        delete draft.addSupplierErrorMessage
        break
      case constants.EDIT_SUPPLIER_SUCCESS:
        draft.suppliers = draft.suppliers.map((supplier) =>
          supplier._id === action.payload._id ? action.payload : supplier,
        )
        delete draft.addSupplierErrorMessage
        break
      case constants.DELETE_SUPPLIER_SUCCESS:
        draft.suppliers = draft.suppliers.filter(
          (supplier) => supplier._id !== action.payload._id,
        )
        delete draft.addSupplierErrorMessage
        break
      default:
        break
    }
  })

export default SuppliersPage
