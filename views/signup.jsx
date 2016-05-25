'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'SignUp',

  render: function render() { 
  	 
     return <div className="signin">
  	    <form className="form-signin" role="form" action="/signup" method="post">
              <h2>SqlPad</h2>
              {(this.props.message)? <h3>{this.props.message}</h3> : ""}


              {(() => {

                  if ( this.props.openAdminRegistration ) {

                    return <div><h4>Admin Registration is Open</h4>
                    <p>
                        Welcome to SqlPad! 
                        Since there are no admins currently in the system, 
                        registration is open to anyone. By signing up, you will 
                        be granted admin rights, and the system will be locked down.
                        Only people explicitly invited &amp; whitelisted will be able to join.
                    </p>
                    <br /></div>
                      
                  } else {

                     return ""

                  }

              })()}

              <input
                  name="email"
                  defaultValue={this.props.email}
                  type="email"
                  className="form-control top-field"
                  placeholder="Email address"
                  required
                  autofocus />
              <input
                  name="password"
                  defaultValue={this.props.password}
                  type="password"
                  className="form-control middle-field"
                  placeholder="Password"
                  required />
              <input
                  name="passwordConfirmation"
                  defaultValue={this.props.passwordConfirmation}
                  type="password"
                  className="form-control bottom-field"
                  placeholder="Confirm Password"
                  required />
              <br />
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          </form>
  	</div>
  }});
