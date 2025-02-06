import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipeCards = createAsyncThunk(
  "fetchRecipeCards",
  async () => {
    const response = await fetch("http://localhost:8080/api/v1/recipes");
    return response.json();
  }
);

export const fetchSearchRecipe= createAsyncThunk("fetchSearchRecipe",
  async () =>{
    const response = await fetch ("http://localhost:8080/api/v1/recipes/search")
    return response.json();
  }
)


const recipeCardSlice = createSlice({
  name: "RecipeCard",
  //The initial state represents the state before any API call happens.

  initialState: {
    isLoading: false,
    // The request is not in progress initially.
    recipe: [],
    searchRecipe: [],
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRecipeCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipeCards.fulfilled, (state, action) => {
      (state.isLoading = false);
      (state.recipe = action.payload);
      // Assuming the API returns { recipes: [...] }
    });
    builder.addCase(fetchRecipeCards.rejected, (state, action) => {
      (state.error = true);
        (state.isLoading = false);
        console.log("error", action.payload);
    });
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
    });



export default recipeCardSlice.reducer;
