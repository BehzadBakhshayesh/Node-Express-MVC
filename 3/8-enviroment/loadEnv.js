const fs = require("fs")
const path = require("path")

const loadEnv = () => {
    const filePath = path.resolve(__dirname, ".env")
    const data = fs.readFileSync(filePath, "utf-8")

    data.split("\n").filter(i => i.trim()).map(i => i.split("=")).forEach(([key, value]) => {
        process.env[key] = value
    })
}

module.exports = { loadEnv }