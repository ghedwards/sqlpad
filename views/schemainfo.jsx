'use strict';

import React from 'react';
import JSONTree from 'react-json-tree'
// If you're using Immutable.js: `npm i --save immutable`
//import { Map } from 'immutable'

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

                <JSONTree data={this.props.schematree} />

            </div>

        </div>

    }

});

                    