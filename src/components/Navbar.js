import React, { useContext ,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'; // Import the CSS file
import { CartContext } from '../usecontexts/CartProvider';
import { LuLogOut,LuBell } from 'react-icons/lu';
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";


function Navbar({userRole}) {
  const { cartCount, orderCount,setOrderCount } = useContext(CartContext); // Destructure cartCount from CartContext
  const navigate = useNavigate();
  const [showCart, setShowCart] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCartClick = () => {
    if (showCart) {
      navigate('/products'); // Navigate to a default page or previous page
    } else {
      navigate('/products/cartitems'); // Navigate to the CartItems page
    }
    setShowCart(state => !state); // Toggle the cart state
  };

  const handleOrderClick = () =>{
    navigate('/settings/orderdetails');
    setOrderCount(0);
  }
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/');
  };

  const handleUser = () =>{
    setPopupOpen(!isPopupOpen);
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </div>
        <div className="navbar-actions">
        <li className="bell-icon" onClick={handleOrderClick}>
            <LuBell size={24} />
            {orderCount > 0 && <span className="order-count">{orderCount}</span>}
          </li>
          <li className="cart-icon" onClick={handleCartClick}>
            <RiShoppingCartLine size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </li>
          {/* <li className="logout-icon" onClick={handleLogout}>
            <LuLogOut size={24} />
          </li> */}
          <li className="user-icon" onClick={handleUser}>
            <FaRegUserCircle size={24} />
          </li>
          {isPopupOpen && (
            <div className="user-popup">
              <ul>
              <li>Role : {userRole}</li>
                <li style={{m:'1',p:'1',backgroundColor:'red'}} onClick={handleLogout}> Logout <LuLogOut size={24} /></li>
                {/* Add more options as needed */}
              </ul>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
