import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'

function* handleGetClients() {
  try {
    const action = getEndpointURL('GET_CLIENTS')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getClientsSuccess(response.clients))
  } catch (error) {
    yield put(actions.addClientError(error))
  }
}

function* handleGetClientsByField({ type, payload: { name, value } }) {
  try {
    const action = getEndpointURL(type)
    const request = { name, value }
    const response = yield call(networkService.getData, action, request)
    yield put(actions.getClientsSuccess(response.clients))
  } catch (error) {
    yield put(actions.addClientError(error))
  }
}

function* handleAddClient({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.addClientSuccess(response.client))
    history.push('dashboard-clients')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addClientError({ message }))
  }
}

function* handleEditClient({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.editClientSuccess(response.client))
    history.push('dashboard-clients')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addClientError({ message }))
  }
}

function* handleDeleteClient({ type, payload: { _id } }) {
  try {
    const action = getEndpointURL(type)
    yield call(networkService.deleteData, action + _id)
    yield put(actions.deleteClientSuccess({ _id }))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addClientError({ message }))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_CLIENTS, handleGetClients),
    yield takeLatest(constants.ADD_CLIENT, handleAddClient),
    yield takeLatest(constants.DELETE_CLIENT, handleDeleteClient),
    yield takeLatest(constants.EDIT_CLIENT, handleEditClient),
    yield takeLatest(
      constants.GET_CLIENTS_BY_FIELD,
      handleGetClientsByField,
    ),
  ])
}
