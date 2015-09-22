var React = require('React'),
    AppActions = require('../../actions/actions');

var DecreaseItem = React.createClass({
  propTypes: {
    index: React.PropTypes.number
  },
  handler: function() {
    AppActions.decreaseItem(this.props.index);
  },
  render: function() {
    return <button onClick={ this.handler }>-</button>;
  }
});

module.exports = DecreaseItem;
