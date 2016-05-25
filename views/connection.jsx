'use strict';

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  displayName: 'Connection',

  render: function render() { 

    return <div className="col-sm-12 col-md-12 main">
        <form id="connection-form" role="form" className="col-md-6 col-md-offset-3" action={'/connections/'+(this.props.connection._id || "new")} method="post">
            <fieldset>
                <legend>Connection</legend>

                <div className="form-group">
                  <label className="control-label" for="name">Friendly Connection Name</label>  
                  
                  <input id="name" name="name" defaultValue={this.props.connection.name || ''} type="text" placeholder="" className="form-control input-md" />
                </div>

                <div className="form-group">
                  <label className=" control-label" for="driver">Database Driver</label>
                  <div className="">
                    <select id="driver" name="driver" className="form-control" defaultValue={this.props.connection.driver}>
                      <option value="mysql">MySQL</option>
                      <option value="postgres">Postgres</option>
                      <option value="sqlserver">SQL Server</option>
                      <option value="vertica">Vertica</option>
                      <option value="crate">Crate</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className=" control-label" for="host">Host/Server/IP Address</label>  
                  <div className="">
                    <input id="host" name="host" defaultValue={this.props.connection.host || ''} type="text" className="form-control input-md" required="" />
                  </div>
                </div>

                <div className="form-group">
                  <label className=" control-label" for="port">Port (optional)</label>
                  <div className="">
                  <input id="port" name="port" defaultValue={this.props.connection.port || ''} type="text" className="form-control input-md" />
                  </div>
                </div>
                
                <div className="form-group driver-specific mysql postgres sqlserver vertica">
                  <label className=" control-label" for="database">Database Name</label>  
                  <div className="">
                  <input id="database" name="database" defaultValue={this.props.connection.database || ''} type="text" className="form-control input-md" required="" />
                  </div>
                </div>
                
                <div className="form-group driver-specific mysql postgres sqlserver vertica">
                  <label className=" control-label" for="username">Database Username</label>  
                  <input id="username" name="username" defaultValue={this.props.connection.username || ''} type="text" className="form-control input-md" />
                </div>
                
                <div className="form-group driver-specific mysql postgres sqlserver vertica">
                  <label className=" control-label" for="password">Password</label>
                  <input id="password" name="password" defaultValue={this.props.connection.password || ''} type="password" className="form-control input-md" /> 
                </div>
                
                <div className="checkbox driver-specific sqlserver">
                  <label>
                    <input name="sqlserverEncrypt" checked={(this.props.connection.sqlserverEncrypt ? "checked" : "")} type="checkbox" /> Encrypt (necessary for Azure)
                  </label>
                </div>
                
                <div className="checkbox driver-specific postgres">
                  <label>
                    <input name="postgresSsl" checked={(this.props.connection.postgresSsl ? "checked" : "")} type="checkbox" /> Use SSL
                  </label>
                </div>
                
                <div className="checkbox driver-specific mysql">
                  <label>
                    <input name="mysqlInsecureAuth" checked={(this.props.connection.mysqlInsecureAuth ? "checked" : "")} type="checkbox" /> Use old/insecure pre 4.1 Auth System
                  </label>
                </div>
                
                {(this.props.connection._id)?<input type="hidden" name="_method" value="put" />:""}
                
                <div className="form-group">
                  <label className=" control-label" for="btnTest"></label>
                  <div className="">
                    <button id="btn-Save-connection" name="btnSave" className="btn btn-primary" type="submit">Save</button>
                    <button id="btn-test-connection" name="btnTest" className="btn btn-inverse" type="submit">Test Connection</button>
                    <span id="test-connection-result" className="label label-default"></span>
                  </div>
                </div>
                

            </fieldset>
        </form>
    </div>

  }

});