import { createSingleRecipePage } from "../controllers/singleRecipecontroller.js";
import { getRecipe } from "../controllers/singleRecipecontroller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

const router= Router()

router.route("/recipe").post(upload.single("image"),createSingleRecipePage)

router.route("/recipe/:recipeId").get(getRecipe)

export default router;
