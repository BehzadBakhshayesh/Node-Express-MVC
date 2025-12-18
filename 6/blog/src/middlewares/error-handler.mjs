const errorHandler = (err, req, res, next) => {

    const status = err?.status || 500

    let content, stack = ""

    if (process.env.NODE_ENV === "development") {
        content = err?.message
        stack = err?.stack
    } else {
        content = status < 500 ? err?.message : "Server Error"
    }

    return res.status(status).render("error", {
        title: `Error ${status}`,
        content,
        stack
    })
}

export default errorHandler