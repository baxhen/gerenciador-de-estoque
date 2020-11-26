import { createSelector } from 'reselect'
import { initialState } from './reducer'
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const get = (state) => state.productsPage || initialState
const selectCategories = (state) => get(state).categories
const selectProducts = (state) => get(state).products
const selectStockProducts = (state) => get(state).stockProducts
const selectProduct = (state, _id) =>
  selectProducts(state).filter((product) => product._id === _id)[0]
const selectProductsById = (idsArray) =>
  createSelector(selectProducts, (products) => {
    return products.filter((item) => idsArray.includes(item._id))
  })
const selectAddProductErrorMessage = (state) =>
  get(state).addProductErrorMessage
export {
  selectCategories,
  selectProducts,
  selectAddProductErrorMessage,
  selectProduct,
  selectProductsById,
  selectStockProducts,
}
