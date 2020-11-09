import { initialState } from './reducer'
/**
 * Get Entrances
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.entrancesPage || initialState
export const selectEntrances = (state) => get(state).entrances
