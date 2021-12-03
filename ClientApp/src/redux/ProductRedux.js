import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },

    reducers: {
        //add product
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { addProductFailure,addProductStart,addProductSuccess } = productSlice.actions;

export default productSlice.reducer;