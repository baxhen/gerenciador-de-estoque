import { all } from 'redux-saga/effects'
import authSaga from 'containers/AuthContainer/meta/saga'
import productsSaga from 'containers/ProductsPage/meta/saga'
import suppliersSaga from 'containers/SuppliersPage/meta/saga'
import clientsSaga from 'containers/ClientsPage/meta/saga'
import entrancesSaga from 'containers/EntrancesPage/meta/saga'
import takeOffsSaga from 'containers/TakeOffsPage/meta/saga'
import stockSaga from 'containers/StockPage/meta/saga'

export default function* saga() {
  yield all([
    authSaga(),
    productsSaga(),
    suppliersSaga(),
    entrancesSaga(),
    clientsSaga(),
    takeOffsSaga(),
    stockSaga(),
  ])
}
