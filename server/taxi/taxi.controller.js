const { hashPassword } = require("../utils/hanldePasswordEnc");
const { TaxiModel } = require("./taxi.model");
const signup = async (req, res, next) => {
  try {
    const {
      driverName,
      chargePerKm,
      confirmPassword,
      contactNo,
      dutyArea,
      email,
      password,
      workExperience,
    } = req.body;
    if (
      !driverName ||
      !chargePerKm ||
      !confirmPassword ||
      !contactNo ||
      !dutyArea ||
      !email ||
      !password ||
      !workExperience
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = hashPassword(password)

    const taxi = new TaxiModel({
      driverName,
      chargePerKm,
      contactNo,
      dutyArea,
      email,
      password: hashedPassword,
      workExperience,
    });
    await taxi.save();
    return res.status(201).json({ message: "Taxi driver registered" });
  } catch (error) {
    next(error);
  }
};

const getAllTaxies = async (req, res, next) => {
  try {
    const taxis = await TaxiModel.find();
    return res.status(200).json({ message: "Taxis fetched successfully", data: taxis });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    signup, getAllTaxies
}