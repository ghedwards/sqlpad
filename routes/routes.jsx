'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Home from '../views/home.jsx';
import Layout from '../views/layout.jsx';
import Error404 from '../views/404.jsx';
import SignIn from '../views/signin.jsx';
import SignOut from '../views/signin.jsx';
import Queries from '../views/queries.jsx';
import Query from '../views/query.jsx';
import Connections from '../views/connections.jsx';
import Users from '../views/users.jsx';
import Connection from '../views/connection.jsx';
import Configs from '../views/configs.jsx';
import Config from '../views/config.jsx';
import Signup from '../views/signup.jsx';
import QueriesTable from '../views/queries-table.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signout' component={SignOut} />
      <Route path='/query*' component={Query} />
      <Route path='/queries' component={Queries} />
      <Route path='/connections' component={Connections} />
      <Route path='/connection*' component={Connection} />
      <Route path='/users' component={Users} />
      <Route path='/configs' component={Configs} />
      <Route path='/signup' component={Signup} />
      <Route path='/config*' component={Config} />
      <Route path='*' component={Error404} />
    </Route>
  </Router>
);