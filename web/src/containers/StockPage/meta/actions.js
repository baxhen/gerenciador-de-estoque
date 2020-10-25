import * as constants from './constants'

export const getStock = () => ({
  type: constants.GET_STOCK,
})

export const getStockSuccess = (payload) => ({
  type: constants.GET_STOCK_SUCCESS,
  payload,
})

export const getStockError = (payload) => ({
  type: constants.GET_STOCK_ERROR,
  payload,
})
