import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import recipeCardSlice from "./slices/allCardSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    RecipeCard: recipeCardSlice,
  },
});

export default store;
