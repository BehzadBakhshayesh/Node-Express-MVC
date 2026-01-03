import express from "express"
import routes from "./routes/index.mjs"
import errorHandler from "./middlewares/error-handler.mjs";
import path from "path";
import overrideMethod from "./middlewares/overrideMethod.mjs";
import { sequelize } from "./config/database.mjs";
import session from 'express-session'
import { RedisStore } from "connect-redis"
import { createClient } from "redis"
import auth from "./middlewares/auth.mjs";

// Initialize client.
const redisClient = createClient({
    url: "redis://127.0.0.1:6379",
});
redisClient.connect().catch(console.error)

// Initialize store.
const redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
})

const app = express()

//connect to db by orm
await sequelize.authenticate()
//create table
await sequelize.sync()

// static files
app.use(express.static("public"))

// body parser
app.use(express.urlencoded({ extended: true }))

// add ejs
app.set("view engine", "ejs")
app.set("views", path.resolve(import.meta.dirname, "views"))

// session 
app.use(session({
    // secret: crypto.randomBytes(64).toString('base64'),
    secret: "afdsfsfsf0980978098dsfsklLKJJH;JKH(&^*()&^;lkj;j;fjsd;oifjsdofjsdofj",
    store: redisStore,
}))

// assign user to req
app.use(auth)

// method-override
app.use(overrideMethod)

// routes
app.use(routes)

// error middlware
app.use(errorHandler)

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })