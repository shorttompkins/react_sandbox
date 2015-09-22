import React from 'react';
import AppActions from '../../actions/actions.js';

class IncreaseItem extends React.Component {
  constructor() {
    super();
    this._handler = this._handler.bind(this);
  }
  _handler() {
    AppActions.increaseItem(this.props.index);
  }
  render() {
    return (
      <button onClick={ this._handler }>+</button>
    );
  }
}

IncreaseItem.propTypes = { index: React.PropTypes.number };

export default IncreaseItem;
