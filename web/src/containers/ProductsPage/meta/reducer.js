import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  categories: [],
  products: [],
}

/* eslint-disable no-param-reassign */
const ProductsPage = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_CATEGORIES_SUCCESS:
        draft.categories = action.payload
        break
      case constants.GET_PRODUCTS_SUCCESS:
        draft.products = action.payload
        break
      case constants.ADD_PRODUCT_SUCCESS:
        draft.products.push(action.payload)
        delete draft.addProductErrorMessage
        break
      case constants.EDIT_PRODUCT_SUCCESS:
        draft.products = draft.products.map((product) =>
          product._id === action.payload._id ? action.payload : product,
        )
        delete draft.addProductErrorMessage
        break
      case constants.DELETE_PRODUCT_SUCCESS:
        draft.products = draft.products.filter(
          (product) => product._id !== action.payload._id,
        )
        delete draft.addProductErrorMessage
        break
      case constants.ADD_CATEGORY_SUCCESS:
        draft.categories.push(action.payload)
        delete draft.addProductErrorMessage
        break
      case constants.ADD_PRODUCT_ERROR:
        draft.addProductErrorMessage = action.payload.message
        break
      default:
        break
    }
  })

export default ProductsPage
