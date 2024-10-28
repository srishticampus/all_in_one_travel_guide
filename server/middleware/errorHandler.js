const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    return res
      .status(400)
      .json({ message: "Email already exists. Please use a different one." });
  }
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: 'Validation Error', errors });
  }
  return res
    .status(500)
    .json({ message: "Server Error", error: err.message, errorCode: err.code });
};

module.exports = { errorHandler };