// import { createSelector } from 'reselect';
import { initialState } from './reducer'
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const selectProductsDomain = (state) => state.productsPage || initialState
const selectCategories = (state) => selectProductsDomain(state).categories
const selectProducts = (state) => selectProductsDomain(state).products
const selectProduct = (state, _id) =>
  selectProducts(state).filter((product) => product._id === _id)[0]
const selectAddProductErrorMessage = (state) =>
  selectProductsDomain(state).addProductErrorMessage
export {
  selectProductsDomain,
  selectCategories,
  selectProducts,
  selectAddProductErrorMessage,
  selectProduct,
}
