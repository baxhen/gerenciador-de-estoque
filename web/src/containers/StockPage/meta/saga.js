import { all, takeLatest, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetStock(action) {
  try {
    yield put(actions.getStockSuccess())
  } catch (error) {
    yield put(actions.getStockError(error))
  }
}

export default function* () {
  yield all([yield takeLatest(constants.GET_STOCK, handleGetStock)])
}
