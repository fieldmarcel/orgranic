import { Router } from "express";
import { bookmarkRecipe,unBookMarkRecipe,getBookmarkedRecipes } from "../controllers/bookmarkController.js";
import { authenticateToken } from "../middlewares/auth.middleware.js"
import {optionalAuthenticateToken}  from "../middlewares/optionalauth.middleware.js"
import { registerUser,loginUser ,logoutUser,getUserDetails,followUser} from "../controllers/usercontroller.js";
const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/login/:id").get(loginUser);
router.get("/:userName", optionalAuthenticateToken, getUserDetails);


router.route("/logout").post(logoutUser);


router.post("/bookmarks", authenticateToken, bookmarkRecipe); // Requires authentication
router.delete("/bookmarks", authenticateToken, unBookMarkRecipe); // Requires authentication
router.get("/:userName/bookmarks", getBookmarkedRecipes); 



export default router;