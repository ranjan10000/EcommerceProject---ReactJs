import { combineReducers } from 'redux';
import cartReducer from './CardSlice'; // Import the cart reducer

const RootReducer = combineReducers({
    cart: cartReducer, // Include the cart slice with the key 'cart'
});

export default RootReducer;

