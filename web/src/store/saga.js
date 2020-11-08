import { all } from 'redux-saga/effects'
import authSaga from 'containers/AuthContainer/meta/saga'
import productsSaga from 'containers/ProductsPage/meta/saga'
import suppliersSaga from 'containers/SuppliersPage/meta/saga'

export default function* saga() {
  yield all([authSaga(), productsSaga(), suppliersSaga()])
}
