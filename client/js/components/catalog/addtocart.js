import React from 'react';
import AppActions from '../../actions/actions';

class AddToCart extends React.Component{
  constructor() {
    super();
  }

  _handler = () => {
    AppActions.addItem(this.props.item);
  }

  render() {
    return (
      <button onClick={ this._handler }>
        Add To Cart
      </button>
    );
  }
}

AddToCart.propTypes = {
  item: React.PropTypes.object
};

export default AddToCart;
