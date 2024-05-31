import { Router } from "express";
import { register, login, getRegisterForm, getLoginForm } from "../controllers/userController.js";

const userRoutes = Router();

// Render registration form
userRoutes.get("/register", getRegisterForm);

// Handle registration form submission
userRoutes.post("/register", register);

// Render login form
userRoutes.get("/login", getLoginForm);

// Handle login form submission
userRoutes.post("/login", login);

export default userRoutes;
