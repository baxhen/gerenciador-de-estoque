import { initialState } from './reducer'
/**
 * Get ClientsPage
 * @param state
 * @returns {Object}
 */
export const get = (state) => state.clientsPage || initialState

const selectClients = (state) => get(state).clients

const selectAddClientErrorMessage = (state) =>
  get(state).addClientErrorMessage

const selectClient = (state, _id) =>
  selectClients(state).filter((client) => client._id === _id)[0]

export { selectClients, selectAddClientErrorMessage, selectClient }
