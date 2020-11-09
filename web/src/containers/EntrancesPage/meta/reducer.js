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
      default:
        break
    }
  })

export default Entrances
