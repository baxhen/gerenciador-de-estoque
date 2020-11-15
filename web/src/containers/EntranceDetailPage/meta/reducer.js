import produce from 'immer'

export const initialState = {}

/* eslint-disable no-param-reassign */
const EntranceDetail = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break
    }
  })

export default EntranceDetail
