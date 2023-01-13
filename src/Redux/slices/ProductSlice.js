import {createSlice} from "@reduxjs/toolkit"
const initialState={
   
}

export const productSlice= createSlice({
    name: "productData", 
    initialState, 
    reducers:
    { 
        saveSaleData: (state, action) => {
        state.saleData = action.payload
      }
     }

})

export const {
    saveSaleData
}=productSlice.actions

export default productSlice.reducer;