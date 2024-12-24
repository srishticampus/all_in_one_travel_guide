const { isValildMongooseId } = require("../utils/mongooseId");
const { TaxiBookingModel } = require("./taxiBooking.model");
console.log(isValildMongooseId);

const calculateTaxiFare = async (req, res, next) => {
  try {
    const { travelDistance } = req.body;
    if (!travelDistance) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    const baseFare = 50;
    const chargePerKM = 10;
    const totalKMCharge = travelDistance * chargePerKM;
    const totalCharge = baseFare + totalKMCharge;
    return res.status(200).json({
      message: "Taxi fare calculated successfully",
      data: totalCharge,
    });
  } catch (error) {
    next(error);
  }
};

const taxiRequets = async (req, res, next) => {
  try {
    const {
      touristId,
      pickUpLocation,
      destination,
      travelDistance,
      pickUpDateTime,
      totalFare,
    } = req.body;
    if (
      !touristId ||
      !pickUpLocation ||
      !destination ||
      !travelDistance ||
      !pickUpDateTime ||
      !totalFare
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    const taxiBooking = new TaxiBookingModel({
      touristId,
      pickUpLocation,
      destination,
      travelDistance,
      pickUpDateTime,
      totalFare,
    });
    await taxiBooking.save();
    return res.status(201).json({
      message: "Taxi booking request sent successfully",
      data: taxiBooking,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTaxiBookingByTouristId = async (req, res, next) => {
  try {
    const { id } = req.params;
    // if (!isValildMongooseId(id)) {
    //   return res.status(401).json({ message: "id is not valid" });
    // }
    const taxiBookings = await TaxiBookingModel.find({ touristId: id });
    return res.status(200).json({
      data: taxiBookings || [],
      message: "All taxi bookings by tourist id",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  calculateTaxiFare,
  taxiRequets,
  getAllTaxiBookingByTouristId
};
