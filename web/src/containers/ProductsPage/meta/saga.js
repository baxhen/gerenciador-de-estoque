import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'

function* handleGetCategories() {
  try {
    const action = getEndpointURL('GET_CATEGORIES')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getCategoriesSuccess(response.categories))
  } catch (error) {
    yield put(actions.getProductsPageError(error))
  }
}
// function* handleGetProductsPage(action) {
//   try {
//     yield put(actions.getProductsPageSuccess())
//   } catch (error) {
//     yield put(actions.getProductsPageError(error))
//   }
// }

export default function* () {
  yield all([yield takeLatest(constants.GET_CATEGORIES, handleGetCategories)])
}
