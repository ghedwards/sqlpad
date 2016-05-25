'use strict';

var React = require('react');

import QueriesTable from '../views/queries-table.jsx';

module.exports = React.createClass({
  displayName: 'Queries',

  render: function render() { 
     
     return (

        <div className="col-sm-12  col-md-12 main">

            <form id="query-filter-form">
                <fieldset>
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <div className="form-group">
                                <label className="control-label" for="search">Search (Name, Query)</label>
                                <input id="query-filter-search" name="search" className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="tag">Tag</label>
                                <select id="query-filter-tag" name="tag" className="form-control" defaultValue={this.props.filter.tags}>
                                    <option value="">All</option>
                                    {this.props.tags ? this.props.tags.map(function(tag) {
                                        return (
                                          <option key={tag} value={tag}>
                                            {tag}
                                          </option>
                                        );
                                      }) : ""}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="connection">Connection</label>
                                <select id="query-filter-connection" name="connection" className="form-control" defaultValue={this.props.filter.connectionId}>
                                    <option value="">All</option>
                                    {this.props.connections ? this.props.connections.map(function(connection) {
                                        return (
                                          <option key={connection._id} value={connection._id}>
                                            {connection.name}
                                          </option>
                                        );
                                      }):""}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="createdBy">Created By</label>
                                <select id="query-filter-created-by" name="createdBy" className="form-control" defaultValue={this.props.filter.createdBy}>
                                    <option value="">Everyone</option>
                                    {this.props.createdBys ? this.props.createdBys.map(function(createdBy) {
                                        return (
                                          <option key={createdBy} value={createdBy}>
                                            {createdBy}
                                          </option>
                                        );
                                      }):""}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="sortBy">Sort By</label>
                                <select id="query-filter-sort-by" name="sortBy" className="form-control" defaultValue="modified">
                                    <option value="modified">Modified</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>
                        
                        <input type="hidden" name="format" value="table-only"/>
                    </div>
                </fieldset>
            </form>
            
            <div id="queries-table">
                 <QueriesTable queries={this.props.queries}></QueriesTable>
            </div>
            
        </div>
    );
  }
});
