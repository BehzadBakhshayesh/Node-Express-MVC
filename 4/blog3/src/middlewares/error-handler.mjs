const errorHandler = (err, req, res, next) => {
    console.log(err?.message);
    console.log(err?.stack);

    return res.status(500).send("SERVER ERROR")
}

export default errorHandler