import express from "express";
import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema({
    userId: String, 
    favourites: [{ id: String, title: String, image: String }],
});
const Favourite = mongoose.model("Favourite", FavouriteSchema);
