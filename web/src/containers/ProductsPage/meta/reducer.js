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
      default:
        break
    }
  })

export default ProductsPage
