import { createSlice } from '@reduxjs/toolkit'

const authSlice= createSlice({
    name: 'auth',
    initialState: {
      isAuth: false,
      user:[],
    },
    reducers: {

      login:(state)=>{

        state.isAuth= true;


      },
      logout: (state) =>{
        state.isAuth = false;
      },
      setUser :(state,action)=>{
        state.user= action.payload

      }
    }
})                                 

export const {login, logout, setUser }= authSlice.actions

export default authSlice.reducer