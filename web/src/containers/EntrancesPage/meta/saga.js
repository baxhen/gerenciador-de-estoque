import { all, takeLatest, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetEntrances(action) {
  try {
    yield put(actions.getEntrancesSuccess())
  } catch (error) {
    yield put(actions.getEntrancesError(error))
  }
}

export default function* () {
  yield all([yield takeLatest(constants.GET_ENTRANCES, handleGetEntrances)])
}
