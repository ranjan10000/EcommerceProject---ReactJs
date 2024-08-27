import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'; // Import the CSS file
import { CiShoppingCart } from 'react-icons/ci';
import { CartContext } from '../usecontexts/CartProvider';
import { LuLogOut } from 'react-icons/lu';

function Navbar() {
  const { cartCount } = useContext(CartContext); // Destructure cartCount from CartContext
  const navigate = useNavigate();
  const [showCart, setShowCart] = React.useState(false);

  const handleCartClick = () => {
    if (showCart) {
      navigate('/products'); // Navigate to a default page or previous page
    } else {
      navigate('/products/cartitems'); // Navigate to the CartItems page
    }
    setShowCart(state => !state); // Toggle the cart state
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </div>
        <div className="navbar-actions">
          <li className="cart-icon" onClick={handleCartClick}>
            <CiShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </li>
          <li className="logout-icon" onClick={handleLogout}>
            <LuLogOut size={24} />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
