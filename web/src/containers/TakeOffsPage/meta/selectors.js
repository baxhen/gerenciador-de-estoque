import { initialState } from './reducer'
/**
 * Get TakeOffs
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.takeOffsPage || initialState
export const selectTakeOffs = (state) => get(state).takeOffs
export const selectAddTakeOffErrorMessage = (state) =>
  get(state).addTakeOffErrorMessage
export const selectTakeOff = (state, _id) =>
  selectTakeOffs(state).filter((takeOff) => takeOff._id === _id)[0]
