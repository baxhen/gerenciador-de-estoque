import * as constants from './constants'

export const getCategories = () => ({
  type: constants.GET_CATEGORIES,
})
export const getCategoriesSuccess = (payload) => ({
  type: constants.GET_CATEGORIES_SUCCESS,
  payload,
})

export const getProductsPage = () => ({
  type: constants.GET_PRODUCTSPAGE,
})

export const getProductsPageSuccess = (payload) => ({
  type: constants.GET_PRODUCTSPAGE_SUCCESS,
  payload,
})

export const getProductsPageError = (payload) => ({
  type: constants.GET_PRODUCTSPAGE_ERROR,
  payload,
})
