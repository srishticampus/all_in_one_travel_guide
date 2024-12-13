const { PackageBooking } = require("./packageBooking.model");

const addPackageBooking = async (req, res, next) => {
  try {
    const {
      packageId,
      touristId,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
    } = req.body;
    console.log(req.body);
    if (!packageId || !touristId) {
      return res.status(400).json({
        message: "Package id and tourist id are required.",
      });
    }
    const packageBooking = new PackageBooking({
      packageId,
      touristId,
      accountHolderName,
      accountNumber,
      expiryDate,
      cvv,
    });
    await packageBooking.save();
    return res.status(200).json({
      message: "Package booking added successfully",
      data: packageBooking,
    });
  } catch (error) {
    next(error);
  }
};
const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await PackageBooking.find()
      .populate("packageId")
      .populate("touristId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};
const getBookingsByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    const bookings = await PackageBooking.find({ touristId })
      .populate("packageId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingsByPackageId = async (req, res, next) => {
  try {
    const { packageId } = req.params;
    const bookings = await PackageBooking.find({ packageId })
      .populate("packageId")
      .populate("packageId")
      .exec();
    return res.status(200).json({
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

const getBookingsByAgencyId = async (req, res, next) => {
  try {
    const { agencyId } = req.params;
    const bookings = await PackageBooking.find({})
      .populate({
        path: "packageId",
        match: { agencyId },
      })
      .populate("touristId")
      .exec();
    const filteredBookings = bookings.filter(
      (booking) => booking.packageId !== null
    );
    return res.status(200).json({
      message: "fetch the bookings that match the agency id",
      data: filteredBookings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPackageBooking,
  getBookingsByTouristId,
  getBookingsByAgencyId,
  getAllBookings,
  getBookingsByPackageId,
};
