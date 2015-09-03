var React = require('react'),
    Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Lets Shop</h1>
        <Link href="/cart">
          View Shopping Cart
        </Link>
      </div>
    );
  }
});

module.exports = Header;
