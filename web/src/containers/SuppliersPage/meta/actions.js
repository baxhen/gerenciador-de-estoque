import * as constants from './constants'

export const deleteSupplier = (payload) => ({
  type: constants.DELETE_SUPPLIER,
  payload,
})
export const deleteSupplierSuccess = (payload) => ({
  type: constants.DELETE_SUPPLIER_SUCCESS,
  payload,
})
export const editSupplier = (payload) => ({
  type: constants.EDIT_SUPPLIER,
  payload,
})
export const editSupplierSuccess = (payload) => ({
  type: constants.EDIT_SUPPLIER_SUCCESS,
  payload,
})
export const getSuppliers = () => ({
  type: constants.GET_SUPPLIERS,
})
export const getSuppliersByField = (payload) => ({
  type: constants.GET_SUPPLIERS_BY_FIELD,
  payload,
})
export const getSuppliersSuccess = (payload) => ({
  type: constants.GET_SUPPLIERS_SUCCESS,
  payload,
})
export const addSupplier = (payload) => ({
  type: constants.ADD_SUPPLIER,
  payload,
})
export const addSupplierSuccess = (payload) => ({
  type: constants.ADD_SUPPLIER_SUCCESS,
  payload,
})
export const addSupplierError = (payload) => ({
  type: constants.ADD_SUPPLIER_ERROR,
  payload,
})

export const getSuppliersPage = () => ({
  type: constants.GET_SUPPLIERSPAGE,
})

export const getSuppliersPageSuccess = (payload) => ({
  type: constants.GET_SUPPLIERSPAGE_SUCCESS,
  payload,
})

export const getSuppliersPageError = (payload) => ({
  type: constants.GET_SUPPLIERSPAGE_ERROR,
  payload,
})
