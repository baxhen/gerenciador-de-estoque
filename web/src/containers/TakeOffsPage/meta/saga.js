import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'

function* handleGetTakeOffs() {
  try {
    const action = getEndpointURL('GET_TAKEOFFS')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getTakeOffsSuccess(response.takeOffs))
  } catch (error) {
    yield put(actions.getTakeOffsError(error))
  }
}

function* handleGetTakeOffsByField({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.getData, action, payload)
    yield put(actions.getTakeOffsSuccess(response.takeOffs))
  } catch (error) {
    yield put(actions.getTakeOffsError(error))
  }
}
function* handleAddTakeOff({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    console.log(response)
    yield put(actions.addTakeOffSuccess(response.takeOff))
    history.push('dashboard-take-offs')
  } catch (error) {
    yield put(actions.getTakeOffsError(error))
  }
}

function* handleEditTakeOff({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.editTakeOffSuccess(response.takeOff))
    history.push('dashboard-take-offs')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addTakeOffError({ message }))
  }
}

function* handleDeleteTakeOff({ type, payload: { _id } }) {
  try {
    const action = getEndpointURL(type)
    yield call(networkService.deleteData, action + _id)
    yield put(actions.deleteTakeOffSuccess({ _id }))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addTakeOffError({ message }))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_TAKEOFFS, handleGetTakeOffs),
    yield takeLatest(constants.ADD_TAKEOFF, handleAddTakeOff),
    yield takeLatest(constants.DELETE_TAKEOFF, handleDeleteTakeOff),
    yield takeLatest(constants.EDIT_TAKEOFF, handleEditTakeOff),
    yield takeLatest(constants.GET_TAKEOFFS_BY_FIELD, handleGetTakeOffsByField),
  ])
}
