import {createSlice} from '@reduxjs/toolkit';

const initialState={
   items:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
// items:[]
}

const addToCart=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{

            // state.value+=action.payload;
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeItem:(state,action)=>{
            // state.value>0? state.value-=action.payload:null
            state.items=state.items.filter((el)=>el.id!=action.payload)
            localStorage.setItem("cart",JSON.stringify(state.items))
        },
        clearItem:(state,action)=>{
            state.value=0
        }
    }
})

export const {addItem,removeItem,clearItem} = addToCart.actions;
export default addToCart.reducer;