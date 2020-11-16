import * as constants from './constants'

export const deleteClient = (payload) => ({
  type: constants.DELETE_CLIENT,
  payload,
})
export const deleteClientSuccess = (payload) => ({
  type: constants.DELETE_CLIENT_SUCCESS,
  payload,
})
export const editClient = (payload) => ({
  type: constants.EDIT_CLIENT,
  payload,
})
export const editClientSuccess = (payload) => ({
  type: constants.EDIT_CLIENT_SUCCESS,
  payload,
})
export const getClients = () => ({
  type: constants.GET_CLIENTS,
})
export const getClientsByField = (payload) => ({
  type: constants.GET_CLIENTS_BY_FIELD,
  payload,
})
export const getClientsSuccess = (payload) => ({
  type: constants.GET_CLIENTS_SUCCESS,
  payload,
})
export const addClient = (payload) => ({
  type: constants.ADD_CLIENT,
  payload,
})
export const addClientSuccess = (payload) => ({
  type: constants.ADD_CLIENT_SUCCESS,
  payload,
})
export const addClientError = (payload) => ({
  type: constants.ADD_CLIENT_ERROR,
  payload,
})

