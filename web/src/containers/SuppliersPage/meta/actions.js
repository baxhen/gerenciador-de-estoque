import * as constants from './constants'

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
