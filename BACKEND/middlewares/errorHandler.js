const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found!`);
    res.status(404);
    next(error);
}

// const errorHandler = (error, req, res, next) => {
//     let statusCode = res.statusCode;
//     if (statusCode != 200) statusCode = 500;
//     return res.status(statusCode).json({
//         success: false,
//         mes: error?.message
//     })
// }

module.exports = {
    notFound,
    // errorHandler
}