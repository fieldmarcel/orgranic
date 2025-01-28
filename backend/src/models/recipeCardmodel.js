import mongoose from "mongoose";
const RecipeCardSchema = new mongoose.Schema(
  {
    title: {   type: mongoose.Schema.Types.ObjectId,ref:"Recipe", required: true },
    rating: { type: mongoose.Schema.Types.ObjectId, ref:"Recipe", required: true },
   
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // subCategory: { type: String },

    // subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
    image: { type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      //  required: true 
      }, // Change to String
  },
  { timestamps: true }
);
export const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);
