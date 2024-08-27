import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';


// Define the thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://api.restful-api.dev/objects');
    const data = await response.json();
    console.table(data);
    return data;
});


const initialState = {
    cartItems: [], // This ensures cartItems is always an array
    status: 'idle',
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        
        extraReducers: (builder) => {
            builder
                .addCase(fetchData.pending, (state) => {
                    state.status = 'loading';
                })
                .addCase(fetchData.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.cartItems = action.payload; // Assuming the fetched data is the cart items
                })
                .addCase(fetchData.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

