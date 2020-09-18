import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';
import Landing from 'components/Landing';
import Feature from 'components/Feature';
import Signup from 'components/auth/Signup';
import Signout from 'components/auth/Signout';
import Signin from 'components/auth/Signin';

ReactDOM.render(
  <Root>
    <App>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={Signup} />
      <Route path="/feature" component={Feature} />
      <Route path="/signout" component={Signout} />
      <Route path="/signin" component={Signin} />
    </App>
  </Root>,
  document.querySelector('#root')
);
