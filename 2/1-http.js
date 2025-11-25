const http = require('http');
// ========================================================

// const server = http.createServer((req, res) => {
//     res.end("Salam")
// })

// server.listen(8000, () => {
//     console.log("server runnig on port 2000");

// })

// ========================================================server.on


// const server = http.createServer()

// server.on("request", (req, res) => {
//     res.write("hello")
//     res.write("world")
//     res.end()
// })

// server.listen(8000, () => {
//     console.log("server runnig on port 8000");

// })

// ========================================================


// const server = http.createServer()


// server.on("request", (req, res) => {
//     console.log("method:", req.method);
//     console.log("url:", req.url);
//     console.log("headers:", req.headers);

//     // res.setHeader('content-type', 'text/plain')
//     res.setHeader('content-type', 'text/html')
//     res.statusCode = 400

//     res.write("hello")
//     res.write(" ")
//     res.write("world")

//     res.end()
// })

// server.listen(8000, () => {
//     console.log("server runnig on port 8000");

// })
// ========================================================application/json

// const server = http.createServer()

// server.on("request", (req, res) => {

//     res.setHeader('content-type', 'application/json')
//     res.statusCode = 200

//     res.write(JSON.stringify({ name: "abc", family: "efg" }))

//     res.end()
// })

// server.listen(8000, () => {
//     console.log("server runnig on port 8000");

// })

// ========================================================Buffer  base64


const server = http.createServer()

server.on("request", (req, res) => {
    const buf = Buffer.from("abc efg")
    const base64 = Buffer.from("abc efg", "utf8").toString("base64")

    res.setHeader('content-type', 'text/html')
    res.statusCode = 200

    res.write("<h1>")
    res.write(buf)
    res.write("</h1>")

    res.write("<h1>")
    res.write(base64)
    res.write("</h1>")

    res.end()
})

server.listen(8000, () => { console.log("server runnig on port 8000") })
