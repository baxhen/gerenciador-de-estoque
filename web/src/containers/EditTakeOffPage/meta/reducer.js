import produce from 'immer'

export const initialState = {}

/* eslint-disable no-param-reassign */
const EditTakeOff = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break
    }
  })

export default EditTakeOff
