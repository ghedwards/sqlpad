
var React = require('react');

module.exports = React.createClass({
  displayName: '404',

  render: function render() {
    return (
      <h1>URL: {this.props.location.pathname} - Not Found(404)</h1>
    );
  }
});