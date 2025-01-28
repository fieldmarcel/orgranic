import { createSingleRecipePage, getRecipe } from "../controllers/singleRecipecontroller.js";
import { Router } from "express";

const router = Router();

// POST route for creating a recipe
router.post("/recipe", createSingleRecipePage);

// GET route for fetching a recipe by title
router.get("/recipe/:title", getRecipe);

export default router;
