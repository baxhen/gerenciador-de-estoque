import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'

function* handleGetEntrances() {
  try {
    const action = getEndpointURL('GET_ENTRANCES')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getEntrancesSuccess(response.entrances))
  } catch (error) {
    yield put(actions.getEntrancesError(error))
  }
}

function* handleGetEntrancesByField({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.getData, action, payload)
    yield put(actions.getEntrancesSuccess(response.entrances))
  } catch (error) {
    yield put(actions.getEntrancesError(error))
  }
}
function* handleAddEntrance({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    console.log(response)
    yield put(actions.addEntranceSuccess(response.entrance))
    history.push('dashboard-entrances')
  } catch (error) {
    yield put(actions.getEntrancesError(error))
  }
}

function* handleEditEntrance({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.editEntranceSuccess(response.entrance))
    history.push('dashboard-entrances')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addEntranceError({ message }))
  }
}

function* handleDeleteEntrance({ type, payload: { _id } }) {
  try {
    const action = getEndpointURL(type)
    yield call(networkService.deleteData, action + _id)
    yield put(actions.deleteEntranceSuccess({ _id }))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addEntranceError({ message }))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_ENTRANCES, handleGetEntrances),
    yield takeLatest(constants.ADD_ENTRANCE, handleAddEntrance),
    yield takeLatest(constants.DELETE_ENTRANCE, handleDeleteEntrance),
    yield takeLatest(constants.EDIT_ENTRANCE, handleEditEntrance),
    yield takeLatest(
      constants.GET_ENTRANCES_BY_FIELD,
      handleGetEntrancesByField,
    ),
  ])
}
