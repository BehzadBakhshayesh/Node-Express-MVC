const http = require('http')
const fs = require("fs")
const path = require('path')
const URL = require('url')
const qs = require('qs')
const Static = require('node-static');

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

const STATIC_DIR = "./public"
var fileServer = new Static.Server(STATIC_DIR);


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

    //static files 4
    fileServer.serve(req, res, (error, response) => {
        if (error && error.statusCode === "404") {
            res.statusCode = 404
            res.end("page not found")
        }

    })
})

const port = 5555
server.listen(port, () => {
    console.log("server running on port " + port);

})

