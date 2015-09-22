var React = require('React'),
    Catalog = require('./catalog/catalog'),
    CatalogDetail = require('./catalog/item'),
    Cart = require('./cart/cart'),
    Template = require('./layout/template'),
    Router = require('react-router-component'),
    Locations = Router.Locations,
    Location = Router.Location;

var App = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    );
  }
});

module.exports = App;
