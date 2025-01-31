import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipeCards = createAsyncThunk(
  "fetchRecipeCards",
  async () => {
    const response = await fetch("http://localhost:8080/api/v1/recipes?limit=3");
    return response.json();
  }
);

const recipeCardSlice = createSlice({
  name: "RecipeCard",
  initialState: {
    isLoading: false,
    recipe: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipeCards.fulfilled, (state, action) => {
      (state.isLoading = false), (state.recipe = action.payload);
      // Assuming the API returns { recipes: [...] }
    });
    builder.addCase(fetchRecipeCards.rejected, (state, action) => {
      (state.error = true),
        (state.isLoading = false),
        console.log("error", action.payload);
    });
  },
});

export default recipeCardSlice.reducer;
