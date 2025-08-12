import { Router } from "express";
import { signUp, login, logout, authCheck } from "../controllers/auth.controller.js";

const router = Router();

router.post("/sign-up", signUp)

router.post("/login", login)

router.post("/logout", logout)

router.post("/auth-check", authCheck)

export default router;