// src/CartItems.js
import React, { useContext } from 'react';
import { CartContext } from './usecontexts/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/CartItems.css'; // Import custom styles
import { MdRemoveShoppingCart } from "react-icons/md";

export default function CartItems() {
    const { carItems, removeFromCart } = useContext(CartContext);

    if (carItems.length === 0) {
        return (
            <div className="container mt-2">
                <div className="alert alert-info" role="alert">
                    No items in the cart.
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Cart Items</h2>
            <div className="list-group">
                {carItems.map(item => (
                    <div className="cart-item-container d-flex justify-content-between align-items-center" key={item.id}>
                        <div className="cart-item-details">
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="mb-1">Category: {item.category}</p>
                        </div>
                        <span className="cart-item-price">${item.price}</span>
                        <div className="removecart" onClick={() => removeFromCart(item.id)}>
                            <MdRemoveShoppingCart size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
