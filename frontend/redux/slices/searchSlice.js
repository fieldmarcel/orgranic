import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchRecipe= createAsyncThunk("fetchSearchRecipe",
    async () =>{
      const response = await fetch ("http://localhost:8080/api/v1/recipes/search")
    }
)

const  searchRecipeSlice = createSlice({
    name:"searchRecipe",
    initialState :{
    isLoading  :false,
    recipe:[],
    error:false
    },
    extraReducers :(builder)=>{
builder.addCase(fetchSearchRecipe.pending,(state)=>{
    state.isLoading = true;
})
builder.addCase(fetchSearchRecipe.fulfilled,(state,action)=>{
(state.isLoading = true);
(state.recipe= action.payload);


})
builder.addCase(fetchSearchRecipe.rejected,(state)=>{
    (state.error= true);
    (state.isLoading = false);
    console.log("error", action.payload);})
    }
})