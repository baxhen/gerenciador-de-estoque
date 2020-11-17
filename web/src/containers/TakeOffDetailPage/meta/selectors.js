import { initialState } from './reducer'
/**
 * Get TakeOffDetail
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.TakeOffDetail || initialState
