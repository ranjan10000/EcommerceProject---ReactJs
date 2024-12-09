import React, { useContext, useState, useEffect, useRef } from "react";
import { ProductsContext } from "../usecontexts/ProductProvider";
import 'bootstrap/dist/css/bootstrap.css';
import './css/Profile.css'; // If you have additional custom styles
import { CartContext } from '../usecontexts/CartProvider';
import { FaCartPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Product() {
    const { addToCart } = useContext(CartContext);
    const [dummyData] = useContext(ProductsContext);
    const [quantity, setQuantity] = useState({}); // To manage quantity for each product
    const tagRefs = useRef([]); // Array to store refs for each element
    const[Loading,setLoading] = useState(true);
    // Effect to log dimensions of each element
    useEffect(() => {
        tagRefs.current.forEach((ref) => {
            if (ref) {
           
                console.log(`Element dimensions: ${ref.tagName}, Width: ${ref.offsetWidth}px, Height: ${ref.offsetHeight}px`);
                
            }
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 4000); 

        return () => clearTimeout(timer); 
    }, []);


    // Function to add refs to the array
    const addRef = (el) => {
        if (el && !tagRefs.current.includes(el)) {
            tagRefs.current.push(el);
        }
    };

    const handleQuantityChange = (id, delta) => {
        setQuantity(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + delta
        }));
    };

    const handleAddToCart = (item) => {
        addToCart({ ...item, quantity: quantity[item.id] || 1 });
        setQuantity(prev => ({ ...prev, [item.id]: 1 })); // Reset quantity after adding to cart
    };

    if (!dummyData.length) {
        return <p>No data available</p>;
    }

    return (
        <div className="product-details">
            <h2 className="my-4">Product Details</h2>
            <div className="row">
                {dummyData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <img
                                src={item.image ? `product_img/${item.image}` : null}
                                className="card-img-top"
                                alt={item.name}
                            />
                            {/* ref={addRef} */}
                            <div className="card-body"  >
                                <h5 className="card-title">
                                    {item.name || <Skeleton/>}
                                </h5>
                                <p className="card-text">
                                 <strong>Price:</strong> {`$${item.price}`}
                                </p>
                                <p className="card-text">
                                    <strong>Category:</strong> {item.category}
                                </p>
                                <div className="d-flex align-items-center mb-3">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        disabled={(quantity[item.id] || 1) <= 1}
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="mx-2">
                                        {quantity[item.id] || 1}
                                    </span>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        <HiPlus />
                                    </button>
                                </div>
                                <button key={index}
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
