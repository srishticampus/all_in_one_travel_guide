const { hashPassword } = require("../utils/hanldePasswordEnc");
const { HotelModel } = require("./hotel.model");

const hotelSignup = async (req, res, next) => {
  try {
    const { hotelName, hotelLocation, password, email, phoneNumber } =
      req.body;
    const hashedPassword = await hashPassword(password);
    const hotel = new HotelModel({
      hotelLocation,
      hotelName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await hotel.save();
    return res.status(201).json({
      message: "hotel registration completed successfully",
      data: hotel,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  hotelSignup,
};
