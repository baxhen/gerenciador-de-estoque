import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  stock: [],
}

/* eslint-disable no-param-reassign */
const Stock = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_STOCK_SUCCESS:
        draft.stock = action.payload
        break
      case constants.GET_STOCK_ERROR:
        break
      default:
        break
    }
  })

export default Stock
