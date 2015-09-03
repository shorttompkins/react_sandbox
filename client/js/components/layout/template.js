var React = require('react'),
    Header = require('./header');

var Template = React.createClass({
  propTypes: {
    children: React.PropTypes.array
  },
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Template;
