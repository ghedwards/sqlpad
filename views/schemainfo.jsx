'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName: 'Schema Info',

    propTypes: {
        schematree: React.PropTypes.object
    },

    render: function render() { 

        var tableType, self = this;

        return <div id="panel-db-info-container">

            <button id="btn-reload-schema" className="btn btn-default btn-sm">
                <span className="glyphicon glyphicon-refresh"></span>
            </button>

            <div id="panel-db-info">

                <ul className="schema-info">

                    {Object.keys(self.props.schematree).map(function(tableType) {

                        return <li className="open">
                            <a className={'schema-info-'+(tableType+'').toLowerCase()}>{tableType}</a>
                            <ul>
                                {Object.keys(self.props.schematree[tableType]).map(function(schema){
                                    return <li className="open">
                                        <a className="schema-info-schema">{schema}</a>
                                        <ul>
                                            {Object.keys(self.props.schematree[tableType][schema]).map(function(tableName){
                                                return <li>
                                                    <a className="schema-info-table" data-full-name={schema + "." + tableName}>{tableName}</a>
                                                    <ul class="hidden">
                                                        {self.props.schematree[tableType][schema][tableName].map(function(column){
                                                            return <li>
                                                                <span className="schema-info-column" data-full-name={schema + "." + tableName + "." + column.column_name}>
                                                                    {column.column_name} 
                                                                    <span class="data-type">({column.data_type})</span>
                                                                </span>
                                                            </li>
                                                        })}
                                                    </ul>
                                                </li>
                                            })}
                                        </ul>
                                    </li>
                                })}
                               
                            </ul>
                        </li>

                    })}

                </ul>
            
            </div>

        </div>

    }

});

                    