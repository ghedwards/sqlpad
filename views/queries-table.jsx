'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'QueriesTable',

  render: function render() { 
     
     return <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>connection</th>
                            <th>Created By</th>
                            {/*<th>Accessed</th>*/}
                            <th>Modified</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.queries ? this.props.queries.map(function(query) {

                            return <tr key={query._id}>
                                <td><a href={'/query/'+query._id}>{query.name}</a></td>
                                <td>
                                    {query.tags.map(function(tag) {
                                        <a key={tag} className="tag label label-info" href={'/queries?tag='+tag}>{tag}</a>
                                    })}
                                </td>
                                <td>{query.createdBy}</td>
                                <td>{query.modifiedCalendar}</td>
                                <td className="table-cell table-cell-buttons">
                                    <form role="form" className="form-delete-query" action={'/query/'+query._id} method="post">
                                        <input type="hidden" name="_method" value="delete" />
                                        <button className="btn btn-default btn-sm" type="submit">Delete</button>
                                    </form>
                                </td>

                            </tr>

                        }) : ""}

                       
                    </tbody>
                </table>
            </div>
    }});
