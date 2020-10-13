import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Root from './Root';
import { Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage/dynamic';
import LogOutContainer from './containers/LogOutContainer/dynamic';
import SignUpPage from './containers/SignUpPage/dynamic';
import FeaturePage from 'containers/FeaturePage/dynamic';
import RecoverPasswordPage from 'containers/RecoverPasswordPage/dynamic';
import ResetPasswordPage from 'containers/ResetPasswordPage/dynamic';
import HomePage from 'containers/HomePage/dynamic';
import AboutPage from 'containers/AboutPage/dynamic';

ReactDOM.render(
  <Root>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signout" component={LogOutContainer} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/feature" component={FeaturePage} />
      <Route exact path="/recoverPassword" component={RecoverPasswordPage} />
      <Route exact path="/resetPassword/:token/:email" component={ResetPasswordPage} />
    </App>
  </Root>,
  document.getElementById('root')
);
