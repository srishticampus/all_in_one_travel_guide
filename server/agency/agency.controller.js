const { hashPassword } = require("../utils/hanldePasswordEnc");
const { AgencyModel } = require("./agency.model");

const agencySignup = async (req, res, next) => {
  try {
    const { agencyName, agencyAddress, password, email, phoneNumber } =
      req.body;
    const hashedPassword = await hashPassword(password);
    const agency = new AgencyModel({
      agencyAddress,
      agencyName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await agency.save();
    return res.status(201).json({
      message: "Agency registration completed successfully",
      data: agency,
    });
  } catch (error) {
    next(error);
  }
};
const getAllAgencies = async (req, res, next) => {
  try {
    const agencies = await AgencyModel.find();
    return res.status(200).json({
      message: "All agencies fetched successfully",
      data: agencies,
    });
  } catch (error) {
    next(error)
  }
}

module.exports = {
  agencySignup,
  getAllAgencies
};
