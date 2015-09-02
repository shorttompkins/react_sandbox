var React = require('react'),
    Header = require('./header');

var Template = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Template;
