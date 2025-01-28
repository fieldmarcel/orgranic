import { Recipe } from "../models/singleRecipemodel.js";

const createSingleRecipePage = async (req, res) => {
  const {
    subCategory,
    title,
    rating,
    description,
    cookTime,
    readyIn,
    serving,
    ingredients,
    nutrition,
    cuisine,
    mealType,
    steps,
    image,
  } = req.body;

  try {
    // Validate required fields
    if (
      !subCategory ||
      !title ||
      !rating ||
      !description ||
      !cookTime ||
      !serving ||
      !ingredients ||
      !nutrition ||
      !cuisine ||
      !mealType ||
      !steps ||
      !image
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Save recipe to the database
    const recipe = await Recipe.create({
      image,
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

    return res.status(201).json({
      message: "Recipe created successfully",
      recipe,
    });
  } catch (error) {
    console.error("Error creating recipe:", error.message);
    return res.status(500).json({ error: "Error creating recipe." });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { title } = req.params; // Fetch recipe by title
    const recipe = await Recipe.findOne({ title });

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }

    return res.status(200).json({ recipe });
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
    return res.status(500).json({ error: "Error fetching recipe." });
  }
};

export { createSingleRecipePage, getRecipe };
