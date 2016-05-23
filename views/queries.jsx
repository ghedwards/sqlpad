'use strict';

var React = require('react');

import Layout from '../views/layout.jsx';

module.exports = React.createClass({
  displayName: 'SignIn',

  render: function render() { 
    return (
      <Layout>
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
                                <select id="query-filter-tag" name="tag" className="form-control">
                                    <option value="">All</option>
                                    {/* <% tags.forEach(function(tag) { %>
                                     *   <option value="<%= tag %>" <%=( filter && filter.tags && filter.tags===tag ? 'selected' : '') %>>
                                     *       <%= tag %>
                                     *   </option>
                                    <% }) %> */}
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-2 col-md-2">
                            <div class="form-group">
                                <label class="control-label" for="connection">Connection</label>
                                <select id="query-filter-connection" name="connection" className="form-control">
                                    <option value="">All</option>
                                    {/* <% connections.forEach(function(connection) { %>
                                        <option value="<%= connection._id %>" <%=( filter && filter.connectionId && filter.connectionId===connection._id ? 'selected' : '') %>>
                                            <%= connection.name || "" %>
                                        </option>
                                    <% }) %> */}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="createdBy">Created By</label>
                                <select id="query-filter-created-by" name="createdBy" className="form-control">
                                    <option value="">Everyone</option>
                                    {/* <% createdBys.forEach(function(createdBy) { %>
                                        <option value="<%= createdBy %>" <%=( filter && filter.createdBy && filter.createdBy===createdBy ? 'selected' : '') %>>
                                            <%= (createdBy && createdBy == user.email ? "Me" : (createdBy || "")) %>
                                        </option>
                                    <% }) %> */}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <div className="form-group">
                                <label className="control-label" for="sortBy">Sort By</label>
                                <select id="query-filter-sort-by" name="sortBy" className="form-control">
                                    <option value="modified" selected>Modified</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>
                        
                        <input type="hidden" name="format" value="table-only"/>
                    </div>
                </fieldset>
            </form>
            
            <div id="queries-table">

            </div>
            
        </div>
      </Layout>
    );
  }
});
