import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalPrice: 0,
    },
    // takes the last action and the state and returns the new state
    reducers: {
        addProduct: (state, action) => { 
            state.quantity += 1;
            state.products.push(action.payload);
            state.totalPrice += action.payload.price * action.payload.amount;
        },
    },
});


export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;

