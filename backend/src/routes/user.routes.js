import { Router } from "express";
import { registerUser,loginUser ,logoutUser} from "../controllers/usercontroller.js";
const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/login/:id").get(loginUser);



router.route("/logout").post(logoutUser);






export default router;