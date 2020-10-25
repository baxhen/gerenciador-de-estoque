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
