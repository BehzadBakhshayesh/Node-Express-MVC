import express from "express"
import routes from "./routes/index.mjs"
import errorHandler from "./middlewares/error-handler.mjs";
import path from "path";

const app = express()

// static files
app.use(express.static("public"))

// add ejs
app.set("view engine", "ejs")
app.set("views", path.resolve(import.meta.dirname, "views"))

// routes
app.use(routes)

// error middlware
app.use(errorHandler)

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })