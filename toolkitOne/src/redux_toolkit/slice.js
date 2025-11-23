import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:0
}

const addToCart=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{

            state.value+=action.payload;
        },
        removeItem:(state,action)=>{
            state.value>0? state.value-=action.payload:null
        },
        clearItem:(state,action)=>{
            state.value=0
        }
    }
})

export const {addItem,removeItem,clearItem} = addToCart.actions;
export default addToCart.reducer;