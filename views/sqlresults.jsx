'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName: 'SQL Results',

    propTypes: {
        columns: React.PropTypes.object,
        records: React.PropTypes.array
    },

    shouldComponentUpdate: function(){
        return true;
    },

    render: function render() { 
        
        var cols = [];

        if ( this.props.columns ) {

            cols = Object.keys(this.props.columns).map(function(col) { 

                return { key: col };

            });

        }

        return <div id="panel-result">
            <div id="panel-result-header">
                <span className="hide-while-running" style={{display:"none"}}>
                    <span className="panel-result-header-label">Query Run Time: </span>
                    <span className="panel-result-header-value" id="server-run-time"></span>
                    <span className="panel-result-header-label">Rows: </span>
                    <span className="panel-result-header-value" id="rowcount"></span>

                    {(() => {

                      if ( this.props.allowDownload === true ) {

                        return <span><span className="panel-result-header-label">Download: </span>
                        <a id="csv-download-link" className="result-download-link" href={'/download-results/'+this.props.cacheKey+'.csv'}>.csv</a>
                        <a id="xlsx-download-link" className="result-download-link" href={'/download-results/'+this.props.cacheKey+'.xlsx'}>.xlsx</a></span>
                          
                      } else {

                         return ""

                      }

                    })()}

                    <span className="panel-result-header-label incomplete-notification hidden">Incomplete Data (hit record limit)</span>
                </span>
            </div>

            <div id="result-slick-grid">
                
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            {cols.map(function(col) {
                                return <th>{col.key}</th>
                            })}
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.records ? this.props.records.map(function(record) {

                            return <tr> {cols.map(function(col) {

                                return <td>{record[col.key]}</td>

                            })} </tr>;

                        }): null}
                    </tbody>
                </table>
            </div>

            <div id="run-result-notification"></div>

        </div>

    }});
