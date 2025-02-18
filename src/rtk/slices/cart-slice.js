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
                const productClone={...action.payload,quantity:1}//destructing
                state.push(productClone);
           }
        },

        deleteFromCart(state,action){
           return state.filter((product)=>product.id!==action.payload.id)
        },

        minusQuantity(state,action){
            const findProduct= state.find((product)=>product.id===action.payload.id);
            if (findProduct.quantity > 1) {
              findProduct.quantity -= 1;
            }else{
               return state.filter((product)=>product.id!==action.payload.id);
            }

        },
        clearCart(){return[]}

    },
    
  })

  export default cartSlice.reducer;
  export const{addToCart,deleteFromCart,clearCart,minusQuantity}=cartSlice.actions;