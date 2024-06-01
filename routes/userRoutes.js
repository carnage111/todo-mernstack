import { Router } from "express";
import { register, login, getRegisterForm, getLoginForm, logout } from "../controllers/userController.js";

const userRoutes = Router();

// Render registration form
userRoutes.get("/register", getRegisterForm);

// Handle registration form submission
userRoutes.post("/register", register);

// Render login form
userRoutes.get("/login", getLoginForm);

// Handle login form submission
userRoutes.post("/login", login);


//handling logout
userRoutes.get('/logout',logout)

export default userRoutes;
