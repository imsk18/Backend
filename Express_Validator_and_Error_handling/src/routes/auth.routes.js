import { Router } from "express";
import {registerUser} from "../controller/auth.controller.js"
import { registerValidation } from "../validation/auth.validation.js";

const router = Router()

/**
 * post "api/auth/register"
 */
router.post("/register",registerValidation,registerUser)


export default router