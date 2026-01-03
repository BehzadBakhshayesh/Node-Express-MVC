
import express from "express"
import AuthController from "../controllers/auth.mjs"

const router = express.Router()

router.get("/register", AuthController.regigterPage)
router.post("/register", AuthController.regigter)
router.get("/login", AuthController.loginPage)
router.post("/login", AuthController.login)
router.get("/logout", AuthController.logout)


export default router