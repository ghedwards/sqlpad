'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from '../views/layout.jsx';
import Error404 from '../views/404.jsx';
import SignIn from '../views/signin.jsx';
import SignOut from '../views/signin.jsx';
import Queries from '../views/queries.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='/signin' component={SignIn} />
      <Route path='/signout' component={SignOut} />
      <Route path='/queries*' component={Queries} />
      <Route path='*' component={Error404} />
    </Route>
  </Router>
);