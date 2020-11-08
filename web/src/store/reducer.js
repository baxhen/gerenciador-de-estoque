import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import app from '../containers/App/meta/reducer'
import loginPage from '../containers/LoginPage/meta/reducer'
import productsPage from '../containers/ProductsPage/meta/reducer'
import suppliersPage from '../containers/SuppliersPage/meta/reducer'
import auth from 'containers/AuthContainer/meta/reducer'

export default combineReducers({
  loginPage,
  app,
  auth,
  form,
  productsPage,
  suppliersPage,
})
