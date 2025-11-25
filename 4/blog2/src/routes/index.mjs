import express from "express"
import general from "./general.mjs";

const router = express.Router()

router.use("/", general)

// 404 middlware
router.use((req, res, next) => {
    console.log(req.originalUrl);

    return res.status(404).send("NOT FOUND")
})

export default router