import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_BASE_URL + "api/v1/recipes/favourites"; 

export const addToFavourites = createAsyncThunk(
    "favourites/addToFavourites",
    async (recipe, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL, recipe);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to add favourite");
        }
    }
);

export const removeFromFavourites = createAsyncThunk(
    "favourites/remove",
    async (id, { rejectWithValue }) => {
        try {
            await axios.post(process.env.REACT_BASE_URL + `api/v1/recipes/favourites/remove/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue("Failed to remove favourite");
        }
    }
);


export const fetchFavourites = createAsyncThunk(
    "favourites/fetchFavourites",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch favourites");
        }
    }
);


export const removeAllFavourites = createAsyncThunk(
    "favourites/removeAllFavourites",
    async (_, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/all`);
            return []; 
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to remove all favourites");
        }
    }
);

const initialState = {
    favourites: [],
    status: "idle",
    error: null
};

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavourites.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFavourites.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.favourites = action.payload;
            })
            .addCase(fetchFavourites.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(addToFavourites.fulfilled, (state, action) => {
                state.favourites.push(action.payload);
            })
            .addCase(removeFromFavourites.fulfilled, (state, action) => {
                state.favourites = state.favourites.filter(item => item.id !== action.payload);
            })
            .addCase(removeAllFavourites.fulfilled, (state) => {
                state.favourites = [];
            });
    }
});

export default favouritesSlice.reducer;
