import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export let fetchProducts=createAsyncThunk("productsSlice/fetchProducts",async()=>{
    const res= await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    return data;
});


export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState:[],
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          return action.payload;
        })
      },
    
  })

  export default productsSlice.reducer;
