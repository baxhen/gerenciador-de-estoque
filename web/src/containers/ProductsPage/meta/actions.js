import * as constants from './constants'

export const getCategories = () => ({
  type: constants.GET_CATEGORIES,
})
export const getCategoriesSuccess = (payload) => ({
  type: constants.GET_CATEGORIES_SUCCESS,
  payload,
})
export const addCategory = (payload) => ({
  type: constants.ADD_CATEGORY,
  payload,
})
export const addCategorySuccess = (payload) => ({
  type: constants.ADD_CATEGORY_SUCCESS,
  payload,
})

export const deleteProduct = (payload) => ({
  type: constants.DELETE_PRODUCT,
  payload,
})
export const deleteProductSuccess = (payload) => ({
  type: constants.DELETE_PRODUCT_SUCCESS,
  payload,
})
export const editProduct = (payload) => ({
  type: constants.EDIT_PRODUCT,
  payload,
})
export const editProductSuccess = (payload) => ({
  type: constants.EDIT_PRODUCT_SUCCESS,
  payload,
})
export const getProducts = () => ({
  type: constants.GET_PRODUCTS,
})
export const getStockProducts = () => ({
  type: constants.GET_STOCK_PRODUCTS,
})
export const getProductsByField = (payload) => ({
  type: constants.GET_PRODUCTS_BY_FIELD,
  payload,
})
export const getProductsSuccess = (payload) => ({
  type: constants.GET_PRODUCTS_SUCCESS,
  payload,
})
export const getStockProductsSuccess = (payload) => ({
  type: constants.GET_STOCK_PRODUCTS_SUCCESS,
  payload,
})
export const addProduct = (payload) => ({
  type: constants.ADD_PRODUCT,
  payload,
})
export const addProductSuccess = (payload) => ({
  type: constants.ADD_PRODUCT_SUCCESS,
  payload,
})
export const addProductError = (payload) => ({
  type: constants.ADD_PRODUCT_ERROR,
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
