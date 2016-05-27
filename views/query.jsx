'use strict';

var React = require('react');
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var SqlEditor = require('./sqleditor.jsx');
var SqlResults = require('./sqlresults.jsx');
var SchemaInfo = require('./schemainfo.jsx');

require("whatwg-fetch");

module.exports = React.createClass({
  displayName: 'Query',

  getInitialState: function() {
    return {
      records: [],
      schematree: {},
      columns: {},
      connectionId:"",
      queryText:(this.props.query ? this.props.query.queryText : "")
    }
  },

  fetchSchemaTree : function(){
    
    if (this.state.connectionId) {
        //  var params = {
        //     reload: typeof reload != 'undefined' ? reload : false
        // };
        var self = this;
        fetch("/schema-info/" + this.state.connectionId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reload: true,
                connectionId: this.state.connectionId})

        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            self.setState({schematree: json});
        });

    } else {

        this.setState({schematree: []});

    }

  },

  fetchQuery : function() {
     
    var self = this;

       fetch('/run-query', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                queryText: this.state.queryText,
                connectionId: this.state.connectionId,
                cacheKey: "",
                queryName: ""})
        }).then(function(response) {
            return response.json()
        }).then(function(json) {
            self.setState({columns:json.meta,records:json.results});
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });

    },

    handleConnectionIdChange : function(event){

        this.setState({connectionId: event.target.value},function(){

            this.fetchSchemaTree();

        }); 


    },

    handleQueryTextChange : function(val){

        this.setState({queryText: val});

    },

    handleClickRunQuery: function(event) {
        
        event.preventDefault();

        this.fetchQuery();

    },

  render: function render() { 

    return <div className="container-fluid">
            <Nav bsStyle="pills" activeKey={1} className="query-editor-nav-pills" style={{float:"left"}}>
                <NavItem eventKey={1}>SQL</NavItem>
                <NavItem eventKey={2}>Vis</NavItem>
              </Nav>
              
              <form className="navbar-form navbar-left navbar-left-border">
                <button type="button" id="btn-save" className="btn btn-default">
                    <span className="shortcut-letter">S</span>ave
                </button>
                <div className="form-group" style={{marginLeft:"20px"}}>
                    <input id="header-query-name" name="header-query-name" className="input-query-name form-control"
                           defaultValue={this.props.query ? this.props.query.name : ""} type="text" placeholder="Query Name" />
                </div>
                <div className="form-group" style={{marginLeft:"20px"}}>
                    <label className="control-label" htmlFor="tags">Tags</label>
                </div>
                <div className="form-group">
                    <input id="tags" name="tags" className="form-control" data-role="tagsinput"
                        defaultValue={this.props.query ? this.props.query.tags: ""} type="text" />
                </div>
                <input type="hidden" id="cache-key" defaultValue={this.props.cacheKey} />
                <input type="hidden" id="query-id" name="query-id" defaultValue={this.props.query ? this.props.query._id : "" || 'new'}/>
                <span id="btn-save-result" className="label label-info"></span>
            </form>
              <div id="panel-main">
        
        <div className="tab-content">

            {/* BEGIN QUERY SQL PANE */}
            <div className="tab-pane active" id="tab-content-sql">
                <div className="sidebar">
                    <form>
                        <div className="form-group">
                            <label className="control-label" htmlFor="connection">Connection</label>
                            <select id="connection" onChange={this.handleConnectionIdChange} name="connection" className="form-control input-sm" defaultValue={this.props.query ? this.props.query.connection : ""}>
                                <option value="">Choose a Connection...</option>
                                {this.props.connections ? this.props.connections.map(function(connection) {
                                    return (
                                      <option key={connection._id} value={connection._id}>
                                        {connection.name}
                                      </option>
                                    );
                                  }) : ''}
                            </select>
                        </div>
                        <button id="btn-run-query" onClick={this.handleClickRunQuery} className="btn btn-primary btn-sm btn-block">
                            <span className="shortcut-letter">R</span>un Query
                        </button>
                        <button id="btn-link-to-table" className="btn btn-default btn-sm btn-block" >
                            <span className="glyphicon glyphicon-link"></span>
                            Link To Table
                        </button>
                        <br />
                        <label className="control-label">Auto-Refresh</label>
                        <div className="input-group">
                          <span className="input-group-addon">
                            <input id="enable-auto-refresh" type="checkbox" />
                          </span>
                          <input id="auto-refresh-seconds" type="text" className="form-control input-sm" placeholder="number of seconds" />
                        </div>{/* input-group */}
                    </form>
                    
                    
                    
                    
                    <hr />


                    <SchemaInfo 
                        schematree={this.state.schematree} 
                    />

                </div>

                <div className="tab-pane-main">
                    
                    <SqlEditor 
                        onChange={this.handleQueryTextChange} 
                        defaultValue={this.state.queryText} 
                        id="codemirror-editor"
                    />
                    
                    <SqlResults 
                        queryText={this.state.queryText} 
                        connectionId={this.state.connectionId} 
                        records={this.state.records}
                        columns={this.state.columns}
                        allowDownload={this.props.allowDownload}
                    />
                    
                </div>
            </div>

            {/*  BEGIN Visualize PANE */}
            <div className="tab-pane" id="tab-content-visualize">
                <div className="sidebar">
                    <div id="chart-setup">
                        <div className="form-group">
                            <label className="control-label">Chart Type</label>
                            <select id="chart-type-dropdown">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div id="chart-setup-ui"></div>
                    <div>
                        <button id="btn-visualize" className="btn btn-primary btn-sm btn-block">Visualize</button>
                        <button id="btn-save-image" className="btn btn-default btn-sm btn-block">
                            <span className="glyphicon glyphicon-save"></span>
                            Save Chart Image
                        </button>
                        <button id="btn-link-to-chart" className="btn btn-default btn-sm btn-block" >
                            <span className="glyphicon glyphicon-link"></span>
                            Link To Chart
                        </button>
                    </div>
                </div>
                <div className="tab-pane-main">
                    <div id="chart" style={{height:"100%"}}>
                        <svg style={{height:100}}></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>

}});