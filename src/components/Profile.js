import React, { useContext, useState } from "react";
import { ProductsContext } from "../usecontexts/ProductProvider";
import 'bootstrap/dist/css/bootstrap.css';
import './css/Profile.css'; // If you have additional custom styles
import { CartContext } from '../usecontexts/CartProvider';
import { FaCartPlus } from "react-icons/fa";

export default function Profile() {
    const { addToCart } = useContext(CartContext);
    const [dummyData] = useContext(ProductsContext);
    const [quantity, setQuantity] = useState({}); // To manage quantity for each product

    console.log("Profile Data:", JSON.stringify(dummyData));

    const handleQuantityChange = (id, delta) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + delta
        }));
    };

    const handleAddToCart = (item) => {

        addToCart({...item, quantity: quantity[item.id] || 1});
        setQuantity(prev => ({ ...prev, [item.id]: 1 })); // Reset quantity after adding to cart
    };

    if (!dummyData.length) {
        return <p>No data available</p>;
    }

    return (
        <div className="container">
            <h2 className="my-4">Product Details</h2>
            <div className="row">
                {dummyData.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                                <p className="card-text"><strong>Category:</strong> {item.category}</p>
                                <div className="d-flex align-items-center mb-3">
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary" 
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        disabled={(quantity[item.id] || 1) <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{quantity[item.id] || 1}</span>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary" 
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn btn-success" 
                                    onClick={() => handleAddToCart(item)}
                                >
                                    <FaCartPlus /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
