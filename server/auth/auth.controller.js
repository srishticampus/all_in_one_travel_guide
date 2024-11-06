const { TouristModel } = require("../tourist/tourist.model");
const { USERS_TYPE } = require("../config/constant");
const { generateAccessToken } = require("../utils/handleToken");
const { comparePassword } = require("../utils/hanldePasswordEnc");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const tourist = await TouristModel.findOne({ email });
    if (!tourist) {
      return res.status(404).json({
        message: "Email id or password is incorrecta",
      });
    }
    const isPasswordCorrect = comparePassword(password, tourist.password);

    if (!isPasswordCorrect) {
      return res.status(404).json({
        message: "Email id or password is incorrect",
      });
    }

    const touristCopy = tourist.toObject();
    delete touristCopy.password;
    const { TOURIST } = USERS_TYPE;
    const token = generateAccessToken(touristCopy);
    return res
      .status(200)
      .json({ message: "Tourist Login successfull", role: TOURIST, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
