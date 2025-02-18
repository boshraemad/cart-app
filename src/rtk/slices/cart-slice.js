import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:[],
    reducers: {
        addToCart(state,action){
           const findProduct= state.find((product)=>product.id===action.payload.id);
           if(findProduct){
                findProduct.quantity+=1;
           }else{
                const productsClone={...action.payload,quantity:1}//destructing
                state.push(productsClone);
           }
        },

        deleteFromCart(state,action){
           return state.filter((product)=>product.id!==action.payload.id)
        },

        clearCart(){return[]}

    },
    
  })

  export default cartSlice.reducer;
  export const{addToCart,deleteFromCart,clearCart}=cartSlice.actions;