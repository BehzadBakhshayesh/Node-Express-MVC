import express from "express"
import routes from "./routes/index.mjs"
import errorHandler from "./middlewares/error-handler.mjs";
import renderTemplate from "./middlewares/render-template.mjs";

const app = express()

// static files
app.use(express.static("public"))

// add renderTemplate to res
app.use(renderTemplate)

// routes
app.use(routes)

// error middlware
app.use(errorHandler)

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })