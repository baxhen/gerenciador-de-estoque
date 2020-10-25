import { all, takeLatest, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetSuppliersPage(action) {
  try {
    yield put(actions.getSuppliersPageSuccess())
  } catch (error) {
    yield put(actions.getSuppliersPageError(error))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_SUPPLIERSPAGE, handleGetSuppliersPage),
  ])
}
