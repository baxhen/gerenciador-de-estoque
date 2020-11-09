import * as constants from './constants'

export const getEntrances = () => ({
  type: constants.GET_ENTRANCES,
})

export const getEntrancesSuccess = (payload) => ({
  type: constants.GET_ENTRANCES_SUCCESS,
  payload,
})

export const getEntrancesError = (payload) => ({
  type: constants.GET_ENTRANCES_ERROR,
  payload,
})
export const deleteEntrance = (payload) => ({
  type: constants.DELETE_ENTRANCE,
  payload,
})
export const deleteEntranceSuccess = (payload) => ({
  type: constants.DELETE_ENTRANCE_SUCCESS,
  payload,
})
export const editEntrance = (payload) => ({
  type: constants.EDIT_ENTRANCE,
  payload,
})
export const editEntranceSuccess = (payload) => ({
  type: constants.EDIT_ENTRANCE_SUCCESS,
  payload,
})
export const getEntrancesByField = (payload) => ({
  type: constants.GET_ENTRANCES_BY_FIELD,
  payload,
})

export const addEntrance = (payload) => ({
  type: constants.ADD_ENTRANCE,
  payload,
})
export const addEntranceSuccess = (payload) => ({
  type: constants.ADD_ENTRANCE_SUCCESS,
  payload,
})
export const addEntranceError = (payload) => ({
  type: constants.ADD_ENTRANCE_ERROR,
  payload,
})
