import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import app from '../containers/App/meta/reducer'
import loginPage from '../containers/LoginPage/meta/reducer'
import productsPage from '../containers/ProductsPage/meta/reducer'
import suppliersPage from '../containers/SuppliersPage/meta/reducer'
import clientsPage from '../containers/ClientsPage/meta/reducer'
import entrancesPage from '../containers/EntrancesPage/meta/reducer'
import takeOffsPage from '../containers/TakeOffsPage/meta/reducer'
import auth from 'containers/AuthContainer/meta/reducer'

export default combineReducers({
  loginPage,
  app,
  auth,
  form,
  productsPage,
  suppliersPage,
  clientsPage,
  entrancesPage,
  takeOffsPage,
})
