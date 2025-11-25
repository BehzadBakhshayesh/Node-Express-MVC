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

    const { pathname, method } = req

    if (pathname === "/login") {

        if (method === 'GET') {
            return res.end(fs.readFileSync(path.resolve(__dirname, "form-post.html")))
        }

        if (method === 'POST') {

            const chunks = []

            req.on("data", (chunk) => {
                chunks.push(chunk)
            })

            req.on("end", () => {
                const buffer = Buffer.concat(chunks)
                const str = buffer.toString()
                const body = qs.parse(str)

                return res.json(body)
            })

            return
        }
    }

    res.statusCode = 404
    res.end("page not found")
})

const port = 5555
server.listen(port, () => {
    console.log("server running on port" + port);

})