import { Router } from "express";
import { createSingleRecipePage, getRecipe,searchRecipes,getAllRecipes } from "../controllers/singleRecipecontroller.js";
// import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
// router.post("/", upload.single("image"), createRecipe);

router.post("/",createSingleRecipePage)

router.get("/",getAllRecipes)
router.get("/:id",getRecipe)

router.get("/search",searchRecipes)

// router.get("/filters", getRecipeFilters);

export default router;
