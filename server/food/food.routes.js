const express = require("express");
const {
  addFood,
  foodImgUpload,
  getAllFoodByHotelId,
  getAllFoodItems,
  getFoodItemById,
  updateFoodItem,
} = require("./food.controller");

const foodRoutes = express.Router()
foodRoutes.post('/', foodImgUpload, addFood);
foodRoutes.get('/get-food-by-hotel/:hotelId', getAllFoodByHotelId);
foodRoutes.get('/get-all-food', getAllFoodItems);
foodRoutes.get('/get-food-by-id/:foodId', getFoodItemById);
foodRoutes.patch('/:foodId', foodImgUpload, updateFoodItem);
module.exports = foodRoutes;