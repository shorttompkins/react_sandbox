import React from 'react';
import Header from './header';

class Template extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Template;
