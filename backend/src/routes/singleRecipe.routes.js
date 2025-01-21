import { createSingleRecipePage } from "../controllers/singleRecipecontroller.js";
import { getRecipe } from "../controllers/singleRecipecontroller.js";
import { Router } from "express";

const router= Router()

router.route("/recipe").post(createSingleRecipePage)

router.route("/recipe/:recipeId").get(getRecipe)

export default router;
