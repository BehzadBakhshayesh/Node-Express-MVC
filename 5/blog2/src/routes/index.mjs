import express from "express"
import general from "./general.mjs";
import admin from "./amin/index.mjs";

const router = express.Router()

router.use("/", general)
router.use("/admin", admin)

// 404 middlware
router.use((req, res, next) => {

    console.log(req.originalUrl);

    throw new NotFoundError("Article not found");
    // return res.status(404).send("NOT FOUND")
})

export default router