import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../rtk/slices/products-slice";
import cartReducer from '../rtk/slices/cart-slice';
const store = configureStore({
    reducer: {
        products:productsReducer,
        cart:cartReducer
      },
})

export default store;