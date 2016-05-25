
'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: '500',

  render: function render() {
    return (
      <div>
        <h1>Internal Service Error (500)</h1>
        <h3>Error message: {this.props.err.message}</h3>
        <code>{this.props.err.stack}</code>
      </div>
    );
  }
});