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
export { selectProductsDomain, selectCategories, selectProducts }
