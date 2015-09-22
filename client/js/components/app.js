import React from 'react';
import Catalog from './catalog/catalog.js';
import Cart from './cart/cart.js';
import Template from './layout/template';
import { Locations, Location } from 'react-router-component';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
        </Locations>
      </Template>
    );
  }
}

export default App;
