// src/CartItems.js
import React, { useContext } from 'react';
import { CartContext } from '../usecontexts/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CartItems.css'; // Import custom styles
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";

export default function CartItems() {
    const { carItems, removeFromCart,placeOrder } = useContext(CartContext);
    const total = carItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    if (carItems.length === 0) {
        return (
            <div className="container mt-4">
                <div className="alert alert-info" role="alert">
                    <img 
                        style={{ width: '250px', height: '250px' }}
                        src={require('../images/Empty-bro.png')}
                        alt="Product-empty"
                        className="img-fluid"
                    />
                    <span>No items in the cart.</span>
                </div>
            </div>
        );
    }
    const handlePlaceOrder = () => {
        console.log("Car Items before placing order:", carItems); // Log the items in the cart
        placeOrder(carItems);
    };
    
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cart Items</h2>
            <div className="list-group">
                {carItems.map(item => (
                    <div className="cart-item-container d-flex justify-content-between align-items-center" key={item.id}>
                        <div className="cart-item-details">
                          <img 
                                src={`product_img/${item.image}`} 
                                alt={item.name} 
                                className="cart-item-image"
                            />
                            <div className='d-flex row m-1' >
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="mb-1">Category: {item.category}</p>
                            </div>
                            
                        </div>
                        <span className="cart-item-quantity">{item.quantity}</span>
                        <span className="cart-item-price">${item.quantity * item.price}</span>
                        
                        <div className="removecart" onClick={() => removeFromCart(item.id)}>
                            <MdRemoveShoppingCart size={24} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="total-price-container mt-4">
                <h4 className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <div className="text-right">
                <button className='btn btn-success custom-button' onClick={() => handlePlaceOrder(carItems)}> 
                    Buy Now 
                    <IoBagHandle />
                </button>
            </div>
        </div>
        
    );
}
