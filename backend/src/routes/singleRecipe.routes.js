import { Router } from "express";
import { createSingleRecipePage, getRecipe,searchRecipes,getAllRecipes,getFixedRecipes } from "../controllers/singleRecipecontroller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { addfavourites,removefavourites } from "../controllers/favourite.js";
const router = Router();
// router.post("/", upload.single("image"), createRecipe);

router.post("/", upload.single("image"),createSingleRecipePage)

router.get("/",getAllRecipes)
router.get("/fixed",getFixedRecipes)
router.get("/search",searchRecipes)

router.get("/:id",getRecipe)

router.post("/favourites", addfavourites);
router.post("/favourites/remove", removefavourites);
// router.get("/filters", getRecipeFilters);

export default router;
