import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
// import { history } from '../../../history'

export function* handleGetStock() {
  try {
    const action = getEndpointURL('GET_STOCK')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getStockSuccess(response.stock))
  } catch (error) {
    yield put(actions.getStockError(error))
  }
}

export default function* () {
  yield all([yield takeLatest(constants.GET_STOCK, handleGetStock)])
}
