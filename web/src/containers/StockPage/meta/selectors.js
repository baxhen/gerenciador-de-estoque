import { createSelector } from 'reselect'
import { initialState } from './reducer'
/**
 * Get Stock
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.stockPage || initialState
export const selectStock = (state) => get(state).stock
export const selectStockProducts = createSelector(selectStock, (stock) => {
  return stock.map((item) => {
    return item.quantity > 0 ? item._id : null
  })
})
