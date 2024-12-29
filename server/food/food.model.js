const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: [true, "Hotel ID is required"],
    },
    name: {
      type: String,
      required: [true, "Food name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    isVegItem: {
      type: Boolean,
      required: [true, "Food item is vegitarian or not is required"],
    },
    foodImg: {
        type: String,
        required: [true, "Food image is required"],
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const FoodItemModel = mongoose.model("FoodItem", foodItemSchema);

module.exports = {FoodItemModel};
