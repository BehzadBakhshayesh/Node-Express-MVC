

const Stream = require("stream")
const fs = require("fs")
const path = require("path")

// ======================================================
const readableStream = new Stream.Readable({ read: (size) => { } })

const chunks = []
const writableStream = new Stream.Writable({
    write: (chunk, encoding, next) => {
        chunks.push(chunk)
        next();
    }
})

readableStream.pipe(writableStream)
// ======================================================


const filePath = path.resolve(__dirname, 'files', 'ib.zip')
const data = fs.readFileSync(filePath)

//console.log({ data }); ====>  <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 01 00 48 00 48 00 00 ff ...

const chunkSize = 2 ** 10
const chunkCount = parseInt(data.length / chunkSize) + 1

for (let i = 0; i < chunkCount; i = i + 1) {
    const chunk = data.slice((i * chunkSize), ((i + 1) * chunkSize))
    readableStream.push(chunk)
}

// ======================================================
readableStream.on("close", () => { writableStream.end() })
writableStream.on("", () => {
    console.log("writableStream ended")
    const buffer = Buffer.concat(chunks)
    const newFilePath = path.resolve(__dirname, "files", "new-ib.zip")
    fs.writeFileSync(newFilePath, buffer)
})

readableStream.on("error", (err) => {
    console.log({ err });

})
writableStream.on("error", (rr) => {
    console.log({ err });
})

readableStream.destroy()