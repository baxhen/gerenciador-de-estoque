import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import Root from './Root'
import { Route } from 'react-router-dom'

import LoginPage from './containers/LoginPage/dynamic'
import LogOutContainer from './containers/LogOutContainer/dynamic'
import SignUpPage from './containers/SignUpPage/dynamic'
import RecoverPasswordPage from 'containers/RecoverPasswordPage/dynamic'
import ResetPasswordPage from 'containers/ResetPasswordPage/dynamic'
import VerifyEmailPage from 'containers/VerifyEmailPage/dynamic'
import HomePage from 'containers/HomePage/dynamic'
// import AboutPage from 'containers/AboutPage/dynamic'
import DashboardPage from 'containers/DashboardPage/dynamic'
import AddProductPage from 'containers/AddProductPage/dynamic'
import EditProductPage from 'containers/EditProductPage/dynamic'
import ProductDetailPage from 'containers/ProductDetailPage/dynamic'
import StockPage from 'containers/StockPage/dynamic'
import EntrancesPage from 'containers/EntrancesPage/dynamic'
import ProductsPage from 'containers/ProductsPage/dynamic'
import SuppliersPage from 'containers/SuppliersPage/dynamic'
import TakeOffPage from 'containers/TakeOffPage/dynamic'

ReactDOM.render(
  <Root>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signout" component={LogOutContainer} />
      {/* <Route exact path="/about" component={AboutPage} /> */}
      <Route exact path="/recoverPassword" component={RecoverPasswordPage} />
      <Route
        exact
        path="/resetPassword/:token/:email"
        component={ResetPasswordPage}
      />
      <Route
        exact
        path="/verifyEmail/:token/:email"
        component={VerifyEmailPage}
      />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/dashboard-products" component={ProductsPage} />
      <Route exact path="/dashboard-products-add" component={AddProductPage} />
      <Route
        exact
        path="/dashboard-products-edit"
        component={EditProductPage}
      />
      <Route
        exact
        path="/dashboard-products-detail"
        component={ProductDetailPage}
      />
      <Route exact path="/dashboard-stock" component={StockPage} />
      <Route exact path="/dashboard-entrances" component={EntrancesPage} />
      <Route exact path="/dashboard-suppliers" component={SuppliersPage} />
      <Route exact path="/dashboard-take-off" component={TakeOffPage} />
    </App>
  </Root>,
  document.getElementById('root'),
)
