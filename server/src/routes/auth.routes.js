import { Router } from "express";
import { signUp, login, logout, authCheck } from "../controllers/auth.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/sign-up", signUp)

router.post("/login", login)

router.post("/logout", logout)

router.get("/auth-check",protectRoutes, authCheck)

export default router;