import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Root from './Root';
import { Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import LogOutContainer from './containers/LogOutContainer';
import SignUpPage from './containers/SignUpPage';
import FeaturePage from 'containers/FeaturePage';

ReactDOM.render(
  <Root>
    <App>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signout" component={LogOutContainer} />
      <Route exact path="/about" component={() => <div>About Us</div>} />
      <Route exact path="/feature" component={FeaturePage} />
    </App>
  </Root>,
  document.getElementById('root')
);
