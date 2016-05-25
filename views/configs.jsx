'use strict';

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  displayName: 'Configs',

  render: function render() { 

    return <div className="col-sm-12 col-md-12 main">
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Created Date</th>
                <th>Modified Date</th>
                <th><a href="/configs/new" className="btn btn-primary">Add New</a></th>
            </tr>
            </thead>
            <tbody>

                {this.props.configItems ? this.props.configItems.map(function(config) {

                    return <tr key={config._id}>
                        <td><a href={'/configs/'+config._id}>{config.key}</a></td>
                        <td>{config.value}</td>
                        <td>{moment(config.createdDate).fromNow()}</td>
                        <td>{moment(config.modifiedDate).fromNow()}</td>
                        <td className="table-cell table-cell-buttons">
                            <form role="form" className="form-delete-config" action={'/configs/'+config._id} method="post">
                                <input type="hidden" id="_method" name="_method" value="delete"/>
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
