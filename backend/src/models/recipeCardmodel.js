import mongoose from "mongoose";
const RecipeCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: { type: String },

    // subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
    image: { type: String, required: true }, // Change to String
  },
  { timestamps: true }
);
export const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);
