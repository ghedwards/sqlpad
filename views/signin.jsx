'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'SignIn',

  render: function render() { 
    return (
      <div className="signin">
        <h2>SqlPad</h2>
          <div>
          <form className="form-signin" action="/signin" method="post">
            <input
                id="email"
                name="email"
                type="text"
                className="form-control top-field"
                required
                autofocus />
            <input
                id="password"
                name="password"
                value=""
                type="password"
                className="form-control bottom-field"
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
    );
  }
});