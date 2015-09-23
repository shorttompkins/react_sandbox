import React from 'react';
import AppActions from '../../actions/actions';

class RemmoveFromCart extends React.Component {
  constructor() {
    super();
    this._handler = this._handler.bind(this);
  }
  _handler() {
    AppActions.removeItem(this.props.index);
  }
  render() {
    return (
      <button onClick={ this._handler }>x</button>
    );
  }
}

RemmoveFromCart.propTypes = { index: React.PropTypes.number };

export default RemmoveFromCart;
