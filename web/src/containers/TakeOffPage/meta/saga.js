import { all, takeLatest, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetTakeOffPage(action) {
  try {
    yield put(actions.getTakeOffPageSuccess())
  } catch (error) {
    yield put(actions.getTakeOffPageError(error))
  }
}

export default function* () {
  yield all([yield takeLatest(constants.GET_TAKEOFFPAGE, handleGetTakeOffPage)])
}
