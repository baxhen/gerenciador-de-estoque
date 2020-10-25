import { all, takeLatest, put } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetProductsPage(action) {
  try {
    yield put(actions.getProductsPageSuccess())
  } catch (error) {
    yield put(actions.getProductsPageError(error))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_PRODUCTSPAGE, handleGetProductsPage),
  ])
}
