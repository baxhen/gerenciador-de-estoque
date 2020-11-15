import { initialState } from './reducer'
/**
 * Get EntranceDetail
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.EntranceDetail || initialState
