const Stream = require("stream")
const fs = require("fs")
const path = require("path")


const transformStream = new Stream.Transform({})

transformStream._transform = (chunk, encoding) => {
    const data = chunk.toString().toUpperCase()
    transformStream.push(data)
}

// ls | node 10-transformStream.cjs

process.stdin.pipe(transformStream).pipe(process.stdout)