/*************  ✨ Codeium Command ⭐  *************/
const mongoose = require("mongoose");

const taxiBookingScheama = mongoose.Schema(
  {
    taxiId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "taxis",
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    startingTime: {
      type: String,
      required: true,
    },
    departure: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "unpaid"],
      default: "pending",
    }
  },
  { timestamps: true }
);

const TaxiBooking = mongoose.model("taxiBookingScheama", taxiBookingScheama);
module.exports = { TaxiBooking };
