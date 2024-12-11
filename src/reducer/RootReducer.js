import { combineReducers } from 'redux';
import cartSlice from '../slice/CartSlice';
import  userSlice from '../slice/userSlice';

const RootReducer = combineReducers({
    cart: cartSlice, 
    users: userSlice,
});

export default RootReducer;

