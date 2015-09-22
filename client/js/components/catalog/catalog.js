import React from 'react';
import AddToCart from './addtocart.js';
import AppStore from '../../stores/store.js';

let _getCatalog = function() {
  return { items: AppStore.getCatalog() };
};

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getCatalog();
  }

  render() {
    let items = this.state.items.map(function(item){
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>${item.cost}</td>
          <td><AddToCart item={item} /></td>
        </tr>
      );
    });
    return (
      <table width="100%">
        {items}
      </table>
    );
  }
}

export default Catalog;
