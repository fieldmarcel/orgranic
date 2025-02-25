import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js"
import {optionalAuthenticateToken}  from "../middlewares/optionalauth.middleware.js"
import { registerUser,loginUser ,logoutUser,getUserDetails,followUser} from "../controllers/usercontroller.js";
const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/login/:id").get(loginUser);
router.get("/:userName", optionalAuthenticateToken, getUserDetails);

router.post("/:userName/follow", authenticateToken, followUser);

router.route("/logout").post(logoutUser);






export default router;