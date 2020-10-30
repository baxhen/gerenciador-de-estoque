// import { createSelector } from 'reselect';
import { initialState } from './reducer'
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const selectProductsDomain = (state) => state.productsPage || initialState
const selectCategories = (state) => selectProductsDomain(state).categories
export { selectProductsDomain, selectCategories }
