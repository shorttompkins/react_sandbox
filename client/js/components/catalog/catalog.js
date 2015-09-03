var React = require('react'),
    AppStore = require('../../stores/store'),
    AddToCart = require('./addtocart');

function getCatalog() {
  return { items: AppStore.getCatalog() };
}

var Catalog = React.createClass({
  getInitialState: function() {
    return getCatalog();
  },

  render: function() {
    var items = this.state.items.map(function(item){
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
});

module.exports = Catalog;
