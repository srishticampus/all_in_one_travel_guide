const { TouristModel } = require("../tourist/tourist.model");
const isEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const tourist = await TouristModel.findOne({ email });
    if (tourist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    next()
  } catch (error) {
    next(error)
  }
};

module.exports = {isEmailUnique}