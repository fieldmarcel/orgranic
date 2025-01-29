// import mongoose from "mongoose";

// const RecipeCardSchema = new mongoose.Schema(
//   {
//     recipe: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Recipe",  // Reference the Recipe model
//       required: true,
//     },
//     rating: { type: Number, required: true },  // Directly store the rating
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//       required: true,
//     },
//     image: { type: String, required: true },  // Store the image URL directly
//   },
//   { timestamps: true }
// );

// export const RecipeCard = mongoose.model("RecipeCard", RecipeCardSchema);