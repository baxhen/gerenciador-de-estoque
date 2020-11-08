// import { createSelector } from 'reselect';
import { initialState } from './reducer'
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const get = (state) => state.productsPage || initialState
const selectCategories = (state) => get(state).categories
const selectProducts = (state) => get(state).products
const selectProduct = (state, _id) =>
  selectProducts(state).filter((product) => product._id === _id)[0]
const selectAddProductErrorMessage = (state) =>
  get(state).addProductErrorMessage
export {
  selectCategories,
  selectProducts,
  selectAddProductErrorMessage,
  selectProduct,
}
