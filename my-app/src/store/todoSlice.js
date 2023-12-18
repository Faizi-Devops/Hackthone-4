import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const todoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log("value getting",action.payload)
          state.value.push(action.payload); // Add item to cart
        },
        // Add other actions as needed, like removing from cart, updating quantity, etc.
      },
})

// Action creators are generated for each case reducer function
export const { addToCart} = todoSlice.actions

export default todoSlice.reducer