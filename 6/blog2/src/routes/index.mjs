import express from "express"
import general from "./general.mjs";
import auth from "./auth.mjs";
import admin from "./amin/index.mjs";
import { NotFoundError } from "../utils/errors.mjs";

const router = express.Router()

router.use("/", general)
router.use("/", auth)
router.use("/admin", admin)

// 404 middlware
router.all(/^.*$/, (req, res, next) => {
    throw new NotFoundError("Article not found");
})

export default router