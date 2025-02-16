import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema({
    userId: { type: String, required: true, index: true }, // Fixed field name
    favourites: [{ recipeId: String, title: String, image: String }], // Changed `id` to `recipeId`
});

export const Favourite = mongoose.model("Favourite", FavouriteSchema);
