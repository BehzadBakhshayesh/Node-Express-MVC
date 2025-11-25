


export const home = (req, res) => {
    return res.renderTemplate("index", {
        title: "Home Page",
        content: "This is home page"
    })
}

export const about = (req, res) => {
    return res.renderTemplate("about", {
        title: "About Page",
        content: "This is about page"

    })
}
