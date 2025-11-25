const express = require("express")

const app = express()

// log middlware
app.use((req, res, next) => {
    console.log(req.url);
    next()
})

// /about/* middlware
app.use("/about", (req, res, next) => {
    console.log("about middlware");
    next()
})

// routes
app.get("/", (req, res) => {
    return res.send("HOME")
})

app.get("/about", (req, res) => {
    return res.status(202).send("ABOUT")
})

app.get("/test", (req, res) => {
    throw new Error("TEST");
    return res.send("TEST")
})

app.get("/api", (req, res) => {
    return res.json({ name: 'Behzad' })
})

// 404 middlware
app.use((req, res, next) => {
    console.log(req.originalUrl);

    return res.status(404).send("NOT FOUND")
})

// error middlware
app.use((err, req, res, next) => {
    console.log(err?.message);
    console.log(err?.stack);

    return res.status(500).send("SERVER ERROR")
})

// run server
const PORT = 3000
app.listen(PORT, () => { console.log(`SERVER is running on port ${PORT}`) })