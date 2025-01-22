import { createSlice } from '@reduxjs/toolkit'

const recipeCardSlice= createSlice({

name:"RecipeCard",
initialState:{
    isRecipe:true,
    recipe:[],

},
reducers:{
    handleRecipeCard:(state)=>{
        state.isRecipe=true
    }
}
    
})

export default recipeCardSlice.reducer
