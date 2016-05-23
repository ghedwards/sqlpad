'use strict';

var React = require('react');

import Layout from '../views/layout.jsx';

module.exports = React.createClass({
  displayName: 'SignIn',

  render: function render() { 
    return (
      <Layout>
      <div className="signin">
        <h2>SqlPad</h2>
          <div>
          <form className="form-signin" role="form" action="/signin" method="post">
            <input
                name="email"
                value=""
                type="email"
                className="form-control top-field"
                placeholder="Email address"
                required
                autofocus />
            <input
                name="password"
                value=""
                type="password"
                className="form-control bottom-field"
                placeholder="Password"
                required />
            <br />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
          <div className="form-signin-footer">
            <p>
              <a>Need to Sign Up?</a>
            </p>
          </div>
        </div>
        </div>
      </Layout>
    );
  }
});