import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';

export const fetchData=createAsyncThunk("products",async()=>{
    let data= await fetch("http://localhost:3000/api/clothes")
    data= await data.json()
    return data;
})

const initialState={
    items:[],
    status:undefined,
    error:null
    
}

const productSlice=createSlice({
    name:"product",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})


export default productSlice.reducer;
