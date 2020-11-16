import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  clients:[]
}

/* eslint-disable no-param-reassign */
const Clients = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_CLIENTS_SUCCESS:
        draft.clients = action.payload
        break
      case constants.ADD_CLIENT_ERROR:
        draft.addClientErrorMessage = action.payload.message
        break
      case constants.ADD_CLIENT_SUCCESS:
        draft.clients.push(action.payload)
        delete draft.addClientErrorMessage
        break
      case constants.EDIT_CLIENT_SUCCESS:
        draft.clients = draft.clients.map((client) =>
          client._id === action.payload._id ? action.payload : client,
        )
        delete draft.addClientErrorMessage
        break
      case constants.DELETE_CLIENT_SUCCESS:
        draft.clients = draft.clients.filter(
          (client) => client._id !== action.payload._id,
        )
        delete draft.addClientErrorMessage
        break
      default:
        break
    }
  })

export default Clients
