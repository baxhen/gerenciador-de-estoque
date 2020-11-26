import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'
import { selectStock } from 'containers/StockPage/meta/selectors'

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
    const { products } = payload
    const stockProducts = yield select(selectStock)
    let productsError = []
    products.forEach((product) => {
      stockProducts.forEach((stock) => {
        if (
          product.product === stock._id &&
          product.quantity > stock.quantity
        ) {
          productsError.push(
            `Saída máxima para ${stock.name} é ${stock.quantity}`,
          )
        }
      })
    })

    if (productsError.length > 0) {
      yield put(actions.addTakeOffError(productsError))
    } else {
      const action = getEndpointURL(type)
      const response = yield call(networkService.postData, action, payload)
      yield put(actions.addTakeOffSuccess(response.takeOff))
      history.push('dashboard-take-offs')
    }
  } catch (error) {
    yield put(actions.addTakeOffError([error.message]))
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
