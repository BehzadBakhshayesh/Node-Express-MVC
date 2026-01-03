
export const home = (req, res) => {
    console.log('req.session.user', req.session.user);
    return res.render("index", {
        title: "Home Page",
        content: "This is home page",
        user: req.user

    })
}

export const about = (req, res) => {
    return res.render("about", {
        title: "About Page",
        content: "This is about page",
        user: req.user
    })
}
