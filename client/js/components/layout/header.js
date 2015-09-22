import React from 'react';
import { Link } from 'react-router-component';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Lets Shop</h1>
        <Link href="/cart">
          View Shopping Cart
        </Link>
      </div>
    );
  }
}

export default Header;
