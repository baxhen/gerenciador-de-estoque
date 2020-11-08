import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'

function* handleGetSuppliers() {
  try {
    const action = getEndpointURL('GET_SUPPLIERS')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getSuppliersSuccess(response.suppliers))
  } catch (error) {
    yield put(actions.getSuppliersPageError(error))
  }
}

function* handleGetSuppliersByField({ type, payload: { name, value } }) {
  try {
    const action = getEndpointURL(type)
    const request = { name, value }
    const response = yield call(networkService.getData, action, request)
    yield put(actions.getSuppliersSuccess(response.suppliers))
  } catch (error) {
    yield put(actions.getSuppliersPageError(error))
  }
}

function* handleAddSupplier({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.addSupplierSuccess(response.supplier))
    history.push('dashboard-suppliers')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addSupplierError({ message }))
  }
}

function* handleEditSupplier({ type, payload }) {
  try {
    const action = getEndpointURL(type)
    const response = yield call(networkService.postData, action, payload)
    yield put(actions.editSupplierSuccess(response.supplier))
    history.push('dashboard-suppliers')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addSupplierError({ message }))
  }
}

function* handleDeleteSupplier({ type, payload: { _id } }) {
  try {
    const action = getEndpointURL(type)
    yield call(networkService.deleteData, action + _id)
    yield put(actions.deleteSupplierSuccess({ _id }))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addSupplierError({ message }))
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_SUPPLIERS, handleGetSuppliers),
    yield takeLatest(constants.ADD_SUPPLIER, handleAddSupplier),
    yield takeLatest(constants.DELETE_SUPPLIER, handleDeleteSupplier),
    yield takeLatest(constants.EDIT_SUPPLIER, handleEditSupplier),
    yield takeLatest(
      constants.GET_SUPPLIERS_BY_FIELD,
      handleGetSuppliersByField,
    ),
  ])
}
