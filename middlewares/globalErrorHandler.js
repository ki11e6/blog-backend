// 404 not found
const notFoound = (req, res, next) => {
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// default error handler
const errorHandler = (err, req, res, next) => {
  let statusCode =
    res.statusCode === 200
      ? err.name === "ValidationError"
        ? 400
        : 500
      : res.statusCode;

  let message = err.message;
  let status = err.status ? err.status : "failed";
  res.status(statusCode).json({
    status,
    errorName: err.name,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFoound, errorHandler };
