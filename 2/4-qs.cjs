const http = require('http')
const fs = require("fs")
const path = require('path')
const URL = require('url')
const qs = require('qs')

function initApp(req, res) {

    const { pathname, query } = URL.parse(req.url);
    // console.log( query ); ==>  'username=sdsad&email=asdas%40gmail.com'

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

const server = http.createServer()


server.on("request", (req, res) => {
    initApp(req, res)

    const { pathname, query } = req
    if (pathname === "/") {
        res.end(fs.readFileSync(path.resolve(__dirname, "form-get.html")))
    }

    if (pathname === "/contact") {
        res.json(query)
    }

})

const port = 4444
server.listen(port, () => {
    console.log(`server runnig on port ${port}`);

})