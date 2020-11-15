import { initialState } from './reducer'
/**
 * Get Entrances
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.entrancesPage || initialState
export const selectEntrances = (state) => get(state).entrances
export const selectAddEntranceErrorMessage = (state) =>
  get(state).addEntranceErrorMessage
export const selectEntrance = (state, _id) =>
  selectEntrances(state).filter((entrance) => entrance._id === _id)[0]
