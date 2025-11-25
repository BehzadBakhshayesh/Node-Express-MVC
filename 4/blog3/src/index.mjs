import express from "express"
import routes from "./routes/index.mjs"
import errorHandler from "./middlewares/error-handler.mjs";
import renderTemplate from "./middlewares/render-template.mjs";
import path from "path";

const app = express()

// static files
app.use(express.static("public"))

// create template engine in express
app.engine("bhzd", renderTemplate)
app.set("view engine", "bhzd")
app.set("views", path.resolve(import.meta.dirname, "views"))

// routes
app.use(routes)

// error middlware
app.use(errorHandler)

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })