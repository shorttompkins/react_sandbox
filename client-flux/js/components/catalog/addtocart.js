var React = require('React'),
    AppActions = require('../../actions/actions');

var AddToCart = React.createClass({
  propTypes: {
    item: React.PropTypes.object
  },
  handler: function() {
    AppActions.addItem(this.props.item);
  },
  render: function() {
    return (
      <button onClick={ this.handler }>
        Add To Cart
      </button>
    );
  }
});

module.exports = AddToCart;
