import {configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice';
// import recipeCardSlice from './slices/recipeCardSlice';
const store = configureStore({

reducer: {

    auth:authSlice
},
})

export default store;
