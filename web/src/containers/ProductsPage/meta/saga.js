import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getEndpointURL } from '../../../utils/endpoint'
import networkService from '../../../utils/network'
import { getDataFromStorage } from '../../../utils/cookies'
import * as constants from './constants'
import * as actions from './actions'
import { history } from '../../../history'

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
function* handleGetProducts() {
  try {
    const action = getEndpointURL('GET_PRODUCTS')
    networkService.setCredentials(getDataFromStorage().token)
    const response = yield call(networkService.getData, action)
    yield put(actions.getProductsSuccess(response.products))
  } catch (error) {
    yield put(actions.getProductsPageError(error))
  }
}
function* handleGetProductsByField({ type, payload: { name, value } }) {
  try {
    const action = getEndpointURL(type)
    const request = { name, value }
    const response = yield call(networkService.getData, action, request)
    yield put(actions.getProductsSuccess(response.products))
  } catch (error) {
    yield put(actions.getProductsPageError(error))
  }
}
function* handleAddProduct({
  type,
  payload: { productId, name, category, description },
}) {
  try {
    const action = getEndpointURL(type)
    const request = { productId, name, category, description }
    const response = yield call(networkService.postData, action, request)
    yield put(actions.addProductSuccess(response.product))
    history.push('dashboard-products')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addProductError({ message }))
  }
}
function* handleAddCategory({ type, payload: { name } }) {
  try {
    const action = getEndpointURL(type)
    const request = { name }
    const response = yield call(networkService.postData, action, request)
    yield put(actions.addCategorySuccess(response.category))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addProductError({ message }))
  }
}
function* handleEditProduct({
  type,
  payload: { productId, name, category, description, _id },
}) {
  try {
    const action = getEndpointURL(type)
    const request = { productId, name, category, description, _id }
    const response = yield call(networkService.postData, action, request)
    yield put(actions.editProductSuccess(response.product))
    history.push('dashboard-products')
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addProductError({ message }))
  }
}
function* handleDeleteProduct({ type, payload: { _id } }) {
  try {
    const action = getEndpointURL(type)
    yield call(networkService.deleteData, action + _id)
    yield put(actions.deleteProductSuccess({ _id }))
  } catch (error) {
    const { message } = error.response.data
    yield put(actions.addProductError({ message }))
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
  yield all([
    yield takeLatest(constants.GET_CATEGORIES, handleGetCategories),
    yield takeLatest(constants.GET_PRODUCTS, handleGetProducts),
    yield takeLatest(constants.GET_PRODUCTS_BY_FIELD, handleGetProductsByField),
    yield takeLatest(constants.ADD_PRODUCT, handleAddProduct),
    yield takeLatest(constants.ADD_CATEGORY, handleAddCategory),
    yield takeLatest(constants.EDIT_PRODUCT, handleEditProduct),
    yield takeLatest(constants.DELETE_PRODUCT, handleDeleteProduct),
  ])
}
