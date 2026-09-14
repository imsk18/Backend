import { Router } from "express";
import {registerUser} from "../controller/auth.controller.js"

const router = Router()

/**
 * post "api/auth/register"
 */
router.post("/register",registerUser)


export default router