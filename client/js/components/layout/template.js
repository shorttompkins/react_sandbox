import React from 'react';
import Header from './header';

class Template extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.node
};

export default Template;
