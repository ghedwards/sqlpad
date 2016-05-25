'use strict';

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  displayName: 'Connections',

  render: function render() { 

    return <div className="col-sm-12 col-md-12 main">
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Host/Server</th>
                        <th>Port</th>
                        <th>Database</th>
                        <th>DB Driver</th>
                        <th>Created Date</th>
                        <th><a href="/connections/new" className="btn btn-primary">Add New</a></th>
                    </tr>
                </thead>

                <tbody>

                    {this.props.connections ? this.props.connections.map(function(connection) {

                        return <tr key={connection._id}>
                            <td><a href={'/connections/'+connection._id}>{connection.name}</a></td>
                            <td>{connection.host}</td>
                            <td>{connection.port ? connection.port : ''}</td>
                            <td>{connection.database}</td>
                            <td>{connection.driver}</td>
                            <td>{moment(connection.createdDate).fromNow()}</td>
                            <td className="table-cell table-cell-buttons">
                                <form role="form" className="form-delete-connection" action={'/connections/'+connection._id} method="post">
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

}});