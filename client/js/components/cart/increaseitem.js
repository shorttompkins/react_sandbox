var React = require('React'),
    AppActions = require('../../actions/actions');

var IncreaseItem = React.createClass({
  propTypes: {
    index: React.PropTypes.number
  },
  handler: function() {
    AppActions.increaseItem(this.props.index);
  },
  render: function() {
    return <button onClick={ this.handler }>+</button>;
  }
});

module.exports = IncreaseItem;
