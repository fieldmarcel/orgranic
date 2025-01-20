import { Router } from "express";
import {createRecipeCard} from "../controllers/recipeCardcontroller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { getRecipeCards } from "../controllers/recipeCardcontroller.js";

const router = Router();

// router.route("/").post(
//     upload.fields([
//         {
//             name:"image",
//             maxCount:1
//         }
//     ]),createRecipeCard
// )

router.route("/").post(upload.single("image"), createRecipeCard)

router.route("/").get(getRecipeCards);


export default router;
