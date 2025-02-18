import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:[],
    reducers: {
        addToCart(state,action){state.push(action.payload)},

        deleteFromCart(state,action){
           return state.filter((product)=>product.id!==action.payload.id)
        },

        clearCart(){return[]}

    },
    
  })

  export default cartSlice.reducer;
  export const{addToCart,deleteFromCart,clearCart}=cartSlice.actions;