import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Recipe } from "../models/singleRecipemodel.js";

const createSingleRecipePage = async (req, res) => {
  const {
    recipeId,
    subCategory,
    title,
    rating,
    description,
    price,
    cookTime,
    readyIn,
    serving,
    ingredients,
    nutrition,
    cuisine,
    mealType,
    steps,
  } = req.body;

  console.log("request body", req.body);

  //checking wheteher all tthings a re present or not
  //not included image yet

  try {
    if (
      !recipeId ||
      !subCategory ||
      !title ||
      !rating ||
      !description ||
      !price ||
      !cookTime ||
      !serving ||
      !ingredients ||
      !nutrition ||
      !cuisine ||
      !mealType ||
      !steps 
      || !req.file
    ) {
      res.status(500).json({ error: "All fields are required" });
      console.log("all fields are required ");
    }
    const imageUpload = await uploadOnCloudinary(req.file.path);
    if (!imageUpload || !imageUpload.url) {
        return res.status(500).json({ error: "Image upload failed" });
    }

    console.log("Image uploaded successfully:", imageUpload);
    console.log("File path being uploaded:", req.file.path);

    //creating for db

    const recipe = await Recipe.create({

    image: imageUpload.url,
      recipeId,
      subCategory,
      title,
      rating,
      description,
      steps,
      cookTime,
      readyIn,
      serving,
      ingredients,
      nutrition,
      cuisine,
      mealType,
    });
    console.log("creation is completed");

    return res.status(201).json({
      message: "Recipe card created successfully",
      Recipe: recipe,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in creating recipe", error: error.message });
  }
};
//now fetching all recipe cards

const getRecipe = async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await Recipe.findOne({ recipeId });

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    return res.status(200).json({ recipe });
  } catch (error) {
    console.error("Error in fetching recipe:", error.message);
    return res.status(500).json({ error: "Error in fetching recipe." });
  }
};

export { createSingleRecipePage, getRecipe };

// Update Backend to Support Recipe ID Query
// Modify your backend to handle queries for a specific recipe by ID in the getRecipe controller:

// javascript
// Copy
// Edit
// import Recipe from "../models/recipeModel.js";

// export const getRecipe = async (req, res) => {
//   try {
//     const { id } = req.query; // Extract the ID from the query string
//     if (!id) {
//       return res.status(400).json({ message: "Recipe ID is required" });
//     }

//     const recipe = await Recipe.findById(id);
//     if (!recipe) {
//       return res.status(404).json({ message: "Recipe not found" });
//     }

//     res.status(200).json({ recipe });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching recipe", error });
//   }
// };
