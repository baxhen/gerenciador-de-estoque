import * as constants from './constants'

export const getTakeOffs = () => ({
  type: constants.GET_TAKEOFFS,
})

export const getTakeOffsSuccess = (payload) => ({
  type: constants.GET_TAKEOFFS_SUCCESS,
  payload,
})

export const getTakeOffsError = (payload) => ({
  type: constants.GET_TAKEOFFS_ERROR,
  payload,
})
export const deleteTakeOff = (payload) => ({
  type: constants.DELETE_TAKEOFF,
  payload,
})
export const deleteTakeOffSuccess = (payload) => ({
  type: constants.DELETE_TAKEOFF_SUCCESS,
  payload,
})
export const editTakeOff = (payload) => ({
  type: constants.EDIT_TAKEOFF,
  payload,
})
export const editTakeOffSuccess = (payload) => ({
  type: constants.EDIT_TAKEOFF_SUCCESS,
  payload,
})
export const getTakeOffsByField = (payload) => ({
  type: constants.GET_TAKEOFFS_BY_FIELD,
  payload,
})

export const addTakeOff = (payload) => ({
  type: constants.ADD_TAKEOFF,
  payload,
})
export const addTakeOffSuccess = (payload) => ({
  type: constants.ADD_TAKEOFF_SUCCESS,
  payload,
})
export const addTakeOffError = (payload) => ({
  type: constants.ADD_TAKEOFF_ERROR,
  payload,
})
