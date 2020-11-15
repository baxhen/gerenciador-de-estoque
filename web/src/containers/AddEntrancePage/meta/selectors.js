import { initialState } from './reducer'
/**
 * Get AddEntrance
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.AddEntrance || initialState
