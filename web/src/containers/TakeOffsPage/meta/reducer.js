import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  takeOffs: [],
}

/* eslint-disable no-param-reassign */
const TakeOffs = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_TAKEOFFS_SUCCESS:
        draft.takeOffs = action.payload
        break
      case constants.ADD_TAKEOFF_SUCCESS:
        draft.takeOffs.push(action.payload)
        break
      case constants.ADD_TAKEOFF_ERROR:
        draft.addTakeOffErrorMessage = action.payload.message
        break
      case constants.DELETE_TAKEOFF_SUCCESS:
        draft.takeOffs = draft.takeOffs.filter(
          (takeOff) => takeOff._id !== action.payload._id,
        )
        delete draft.addTakeOffErrorMessage
        break
      default:
        break
    }
  })

export default TakeOffs
