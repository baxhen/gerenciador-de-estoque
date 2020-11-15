import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  entrances: [],
}

/* eslint-disable no-param-reassign */
const Entrances = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_ENTRANCES_SUCCESS:
        draft.entrances = action.payload
        break
      case constants.ADD_ENTRANCE_SUCCESS:
        draft.entrances.push(action.payload)
        break
      case constants.ADD_ENTRANCE_ERROR:
        draft.addEntranceErrorMessage = action.payload.message
        break
      case constants.DELETE_ENTRANCE_SUCCESS:
        draft.entrances = draft.entrances.filter(
          (entrance) => entrance._id !== action.payload._id,
        )
        delete draft.addEntranceErrorMessage
        break
      default:
        break
    }
  })

export default Entrances
