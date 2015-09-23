import React from 'react';
import AppStore from '../../stores/store.js';
import RemoveFromCart from './removefromcart.js';
import IncreaseItem from './increaseitem.js';
import DecreaseItem from './decreaseitem.js';
import StoreWatch from '../../mixins/store-watch.js';
import { Link } from 'react-router-component';

function cartItems() {
  return { items: AppStore.getCart() };
}

//* In order to support mixins, we need to continue to use React.createClass (unfortunately)
//class Cart extends React.Component {
let Cart = React.createClass({
  mixins: [StoreWatch(cartItems)],

  render() {
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
            <td colSpan="4" align="right">Total</td>
            <td align="right">${total}</td>
          </tr>
        </tfoot>
        </table>
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  }
});

export default Cart;
