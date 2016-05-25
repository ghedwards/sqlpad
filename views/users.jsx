'use strict';

var React = require('react');
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var moment = require('moment');

module.exports = React.createClass({
  displayName: 'Connections',

  render: function render() { 

    return <div className="col-sm-12 col-md-12 main">
        <div className="col-md-8">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Signup Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.users ? this.props.users.map(function(user) {
                            
                            return <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{(user.admin ? "yes" : "" )}</td>
                                <td>{(user.createdDate ? moment(user.createdDate).fromNow() : "not yet signed up")}</td>
                                <td className="table-cell table-cell-buttons">
                                    {(() => {

                                      if ( user.admin ) {

                                        return <form role="form" action={'/users/remove-admin/'+user._id} method="post">
                                            <button className="btn btn-default" type="submit">Remove Admin</button>
                                        </form>
                                          
                                      } else {

                                         return <form role="form" action={'/users/make-admin/'+user._id} method="post">
                                            <button className="btn btn-default" type="submit">Make Admin</button>
                                        </form>

                                      }

                                  })()}
                                </td>
                                <td className="table-cell table-cell-buttons">
                                    <form role="form" className="form-delete-user" action="/users/{user._id}" method="post">
                                        <input type="hidden" name="_method" value="delete" />
                                        <button className="btn btn-default" type="submit">Delete</button>
                                    </form>
                                </td>
                            </tr>    
                            
                        }) : ""}

                    </tbody>
                </table>
            </div>    
        </div>

        <div className="col-md-4">
            <div className="well">
                <form role="form" action="/users/whitelist" method="post">
                    <fieldset>
                        <legend>Whitelist a User</legend>
                        <p>
                            No one can sign up for a user account without first being whitelisted. 
                            Once someone has been added to the list, invite them to 
                            continue the sign-up process on the <a href="/signup">signup page</a>.
                        </p>
                        <p>
                            You'll have to write and send the email yourself though.
                            SqlPad isn't fancy enough for that kind of stuff.
                        </p>
                        <div className="form-group">
                            <label className="control-label sr-only" for="email">Email Address</label>
                            <input id="email" name="email" defaultValue="" type="text" placeholder="Email Address" className="form-control input-md" />
                        </div>
                        <div className="checkbox">
                            <label className="checkbox">
                              <input type="checkbox" name="admin" value="admin" /> Is Admin
                            </label>
                        </div>
                        <p className="help-block">
                            <strong>Admins</strong> are special accounts that 
                            can add and edit database connections,
                            as well as whitelist (invite) users to join.
                        </p>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Whitelist Email</button>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
            
        </div>

    </div>

}});
    {/*<% include header %>
  
    
    </div>

<% include footer %>*/}