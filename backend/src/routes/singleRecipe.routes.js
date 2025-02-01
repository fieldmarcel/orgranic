import { Router } from "express";
import { createSingleRecipePage, getRecipe,searchRecipes,getAllRecipes,getFixedRecipes } from "../controllers/singleRecipecontroller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
// router.post("/", upload.single("image"), createRecipe);

router.post("/", upload.single("image"),createSingleRecipePage)

router.get("/",getAllRecipes)
router.get("/fixed",getFixedRecipes)

router.get("/:id",getRecipe)

router.get("/search",searchRecipes)

// router.get("/filters", getRecipeFilters);

export default router;
