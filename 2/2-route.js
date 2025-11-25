const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on("request", (req, res) => {
    const url = req.url

    if (url === "/favicon.ico") {
        const filePath = path.resolve(__dirname, "favicon.ico")
        const file = fs.readFileSync(filePath)

        res.setHeader('content-type', 'image/x-icon')
        res.statusCode = 200
        return res.end(file)
    }

    if (url === "/") {
        res.setHeader('content-type', 'text/plain')
        res.statusCode = 200
        return res.end("Home Page")
    }

    if (url === "/about") {
        const filePath = path.resolve(__dirname, "about.html")
        const file = fs.readFileSync(filePath)

        res.setHeader('content-type', 'text/html')
        res.statusCode = 200
        return res.end(file)
    }

    res.setHeader('content-type', 'text/plain')
    res.statusCode = 404
    return res.end("Page Not Found")
})

const port = 2222
server.listen(port, () => {
    console.log("server runnig on port " + port)
})
