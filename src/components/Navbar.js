import React, { useContext } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import './css/Navbar.css'; // Import the CSS file
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from '../usecontexts/CartProvider';

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
  
  return (
    <nav className="navbar"> 
      <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </div>
        <li style={{ textAlign: 'right', marginRight: '2em', listStyleType: 'none' }}>
          <CiShoppingCart size={24} onClick={handleCartClick} style={{ cursor: 'pointer' }}  />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
