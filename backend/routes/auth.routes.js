import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/signup", signup);
// this is for the signup route that takes the function from auth controller.js and passes it here when the route is finished as in api/auth/signup

router.post("/login", login);

router.post("/logout", logout);
//you define routes on the router object. Each route corresponds to an HTTP method and a URL path.

export default router;
