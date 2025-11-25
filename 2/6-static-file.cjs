const http = require('http')
const fs = require("fs")
const path = require('path')
const URL = require('url')
const qs = require('qs')

function initApp(req, res) {
    const { pathname, query } = URL.parse(req.url);
    req.query = {}
    if (query) {
        req.query = qs.parse(query)
    }
    req.pathname = pathname
    res.json = (data) => {
        res.setHeader("content-type", "application/json")
        res.end(JSON.stringify(data))
    }
}

const STATIC_DIR = "public"
function staticServe(req, res) {
    const { pathname } = req
    const filePath = path.resolve(__dirname, STATIC_DIR, ...pathname.split("/"))
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath)
        res.end(fileData)
        return true
    }
    return false
}

const server = http.createServer()

server.on("request", (req, res) => {
    initApp(req, res)
    const { pathname } = req

    if (pathname === "/") {
        res.setHeader('content-type', 'text/html')
        return res.end(fs.readFileSync(path.resolve(__dirname, "index.html")))
    }
    if (pathname === "/about") {
        res.setHeader('content-type', 'text/html')
        return res.end(fs.readFileSync(path.resolve(__dirname, "about.html")))
    }
    if (pathname === "/favicon.ico") {
        return res.end(fs.readFileSync(path.resolve(__dirname, "favicon.ico")))
    }


    //static files 1
    // if (pathname === '/styles/main.css') {
    //     return res.end(fs.readFileSync(path.resolve(__dirname, "styles", "main.css")))
    // }
    // if (pathname === '/styles/header.css') {
    //     return res.end(fs.readFileSync(path.resolve(__dirname, "styles", "header.css")))
    // }

    //static files 2
    // const filePath = path.resolve(__dirname, ...pathname.split("/"))
    // if (fs.existsSync(filePath)) {
    //     const fileData = fs.readFileSync(filePath)
    //     return res.end(fileData)
    // }

    //static files 3
    if (staticServe(req, res)) return

    res.statusCode = 404
    res.end("page not found")
})

const port = 5555
server.listen(port, () => {
    console.log("server running on port " + port);

})

