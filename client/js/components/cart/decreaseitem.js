import React from 'react';
import AppActions from '../../actions/actions';

class DecreaseItem extends React.Component {
  constructor() {
    super();
  }

  _handler = () => {
    AppActions.decreaseItem(this.props.index);
  }

  render() {
    return (
      <button onClick={ this._handler }>-</button>
    );
  }
}

DecreaseItem.propTypes = { index: React.PropTypes.number };

export default DecreaseItem;
