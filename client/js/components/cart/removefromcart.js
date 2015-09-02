var React = require('React'),
    AppActions = require('../../actions/actions');

var RemmoveFromCart = React.createClass({
  handler: function() {
    AppActions.removeItem(this.props.index);
  },
  render: function() {
    return (
        <button onClick={ this.handler }>
          x
        </button>
      )
  }
});

module.exports = RemmoveFromCart;
