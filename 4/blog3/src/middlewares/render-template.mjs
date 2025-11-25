import path from "path"
import fs from 'fs'

const renderTemplate = (filePath, params, cb) => {

    let view = fs.readFileSync(filePath, "utf-8")

    const entries = Object.entries(params)
    entries.forEach(([key, value]) => {
        if (typeof value === "string") {
            view = view.replace(`#${key}`, value)
        }
    })

    return cb(null, view)
}

export default renderTemplate