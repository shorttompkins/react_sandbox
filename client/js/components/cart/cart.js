var React = require('react'),
    AppStore = require('../../stores/store'),
    RemoveFromCart = require('./removefromcart'),
    IncreaseItem = require('./increaseitem'),
    DecreaseItem = require('./decreaseitem'),
    StoreWatch = require('../../mixins/store-watch'),
    Link = require('react-router-component').Link;

function cartItems() {
  return { items: AppStore.getCart() };
}

var Cart = React.createClass({
  mixins: [StoreWatch(cartItems)],

  render: function() {
    var total = 0;
    var items = this.state.items.map(function(item, i) {
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
        <tr key={item.id}>
          <td><RemoveFromCart index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <IncreaseItem index={i} />
            <DecreaseItem index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
      );
    });

    return (
      <div>
        <table width="100%">
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" align="right">Total</td>
            <td align="right">${total}</td>
          </tr>
        </tfoot>
        </table>
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  }
});

module.exports = Cart;
