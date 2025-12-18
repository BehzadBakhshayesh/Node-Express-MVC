
import express from "express"
import AuthController from "../controllers/auth.mjs"

const router = express.Router()

router.get("/register", AuthController.regigterPage)
router.post("/register", AuthController.regigter)
router.get("/login", AuthController.loginPage)
router.post("/login", AuthController.login)


export default router