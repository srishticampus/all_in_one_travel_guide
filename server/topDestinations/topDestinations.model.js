const mongoose = require("mongoose");
const topDestinationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    packages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    ],
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ]
  },
  { timestamps: true }
);

const TopDestinationModel = mongoose.model(
  "TopDestination",
  topDestinationSchema
);

module.exports = {
  TopDestinationModel,
};
