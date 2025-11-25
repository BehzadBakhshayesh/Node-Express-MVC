const { log } = require('console')
const http = require('http')

http.createServer((req, res) => {

    if (req.url === '/') {

        // res.setHeader('Set-cookie', `name=Behzad; Max-Age=3000; httpOnly; Secure; SameSite=Lax`)

        const cookies = Object.fromEntries(req.headers.cookie?.split(";").map(e => e.trim().split("=")) ?? [])
        const counter = Number(cookies.counter ?? 0)
        log({ counter })
        res.setHeader('Set-cookie', `counter=${counter + 1}; httpOnly; Secure; SameSite=Strict`)

        return res.end("hello")
    }

    res.statusCode = 404
    res.end('not found')

}).listen(4000, () => {
    console.log("server runnin on port 4000");
})