import express from "express"
import routes from "./routes/index.mjs"
import errorHandler from "./middlewares/error-handler.mjs";
import path from "path";
import overrideMethod from "./middlewares/overrideMethod.mjs";


const app = express()

// static files
app.use(express.static("public"))

// body parser
app.use(express.urlencoded({ extended: true }))

// add ejs
app.set("view engine", "ejs")
app.set("views", path.resolve(import.meta.dirname, "views"))

// method-override
app.use(overrideMethod)

// routes
app.use(routes)

// error middlware
app.use(errorHandler)

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })