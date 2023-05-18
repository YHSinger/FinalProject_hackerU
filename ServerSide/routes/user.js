import { Router } from "express";
import user from "../controllers/user.js";
import preventduplicatedrole from "../middleware/preventduplicaterole.js";
import User from "../Model/User.js";
import {
  addToFavorites,
  removeFromFavorites,
  displayFavorites,
} from "../controllers/favorites.js";
import auth from "../middleware/auth.js";
import authByRole from "../middleware/authByRole.js";

const router = Router();
router.post("/register", preventduplicatedrole({ Model: User }), user.register);

router.post("/login", user.login);

router.get(
  "/add-to-favorites/:id",
  auth,
  authByRole(["buisness", "user"]),
  addToFavorites
);

router.get("/display-favorites", auth, displayFavorites);

router.get("/remove-favorites/:id", auth, removeFromFavorites);

//edit user (/:id) - with patch (firstname, lastname, email) use test.api

router.patch("/edit-user/:id", (req, res) => {
  edituser.set(
    req.firstname,
    req.lastname,
    req.email,
    ajaxUtil.getResponseFn(res)
  );
});

// show profile (/:id)

router.get("user-profile/:id", auth, user.userProfile);
export default router;
