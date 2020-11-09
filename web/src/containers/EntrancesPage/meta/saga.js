import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
// import { history } from '../../../history'

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

export default function* () {
  yield all([yield takeLatest(constants.GET_ENTRANCES, handleGetEntrances)])
}
