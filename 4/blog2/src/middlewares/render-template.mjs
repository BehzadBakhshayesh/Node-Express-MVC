import path from "path"
import fs from 'fs'

const renderTemplate = (req, res, next) => {
    res.renderTemplate = (fileName, params) => {
        const filePath = path.resolve(import.meta.dirname, "..", "views", `${fileName}.html`)
        let views = fs.readFileSync(filePath, "utf-8")

        const entries = Object.entries(params)
        entries.forEach(([key, value]) => {
            views = views.replace(`#${key}`, value)
        })

        res.send(views)
    }
    next()
}

export default renderTemplate