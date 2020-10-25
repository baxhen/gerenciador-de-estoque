import * as constants from './constants'

export const getTakeOffPage = () => ({
  type: constants.GET_TAKEOFFPAGE,
})

export const getTakeOffPageSuccess = (payload) => ({
  type: constants.GET_TAKEOFFPAGE_SUCCESS,
  payload,
})

export const getTakeOffPageError = (payload) => ({
  type: constants.GET_TAKEOFFPAGE_ERROR,
  payload,
})
