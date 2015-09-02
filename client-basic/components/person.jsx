var React = require('React');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      name: ''
    }
  },
  logName: function(e) {
    console.log(e.target.innerText);
  },
  render: function() {
    return (
        <li onClick={ this.logName }>{ this.props.name }</li>
      )
  }
});
