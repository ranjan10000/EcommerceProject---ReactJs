// src/usecontexts/CartProvider.js
import React, { createContext, useState ,useEffect} from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [carItems, setCartItems] = useState([]);
    const[cartCount ,setCartCount] = useState(0);

    const addToCart = (item) => {
        if(!carItems.find(cartItem => cartItem.id === item.id)){
            setCartItems([...carItems,item]);
            setCartCount(carItems.length);
        }else{
            console.log("Item already in cart");
              setCartCount(carItems.length);
        }
        console.log(item);
        // setCartCount(cartCount + 1);
    };


    const removeFromCart = (id) => {
        debugger
        setCartItems(carItems.filter(item => item.id !== id));
        debugger
        setCartCount(carItems.length - 1);
    };

    useEffect(() => {
        setCartCount(carItems.length);
    }, [carItems]);

    return (
        <CartContext.Provider value={{ carItems, addToCart,removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}
