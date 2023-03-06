const errorHandler = async (err, req, res, next) => {
  if (err) {
    const newError = {
      message: err.message || "something went wrong !",
      statusCode: err.code || 500,
    };

    return res.status(newError.statusCode).json({ newError });
  }
  next();
};

module.exports = errorHandler;
