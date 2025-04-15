const { FoodItemModel } = require("./food.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG and PNG files are allowed."));
  }
};
const foodImgUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
}).single("foodImg");

const addFood = async (req, res, next) => {
  try {
    const foodImg = req.file;

    const {
      hotelId,
      name,
      description,
      price,
      ingredients,
      foodType,
    } = req.body;

    const foodItem = await FoodItemModel({
      hotelId,
      name,
      description,
      price,
      foodType,
      ingredients,
      foodImg: foodImg.filename,
    });

    await foodItem.save();
    res
      .status(201)
      .json({ message: "Food created successfully", data: foodItem });
  } catch (error) {
    next(error);
  }
};

const getAllFoodByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const foodItems = await FoodItemModel.find({ hotelId });
    res.status(200).json({ message: "Food item fetched", data: foodItems });
  } catch (error) {
    next(error);
  }
};

const getAllFoodItems = async (req, res, next) => {
  try {
    const foodItems = await FoodItemModel.find();
    res.status(200).json({ message: "Food item fetched", data: foodItems });
  } catch (error) {
    next(error);
  }
};

const getFoodItemById = async (req, res, next) => {
  try {
    const { foodId } = req.params;
    const foodItem = await FoodItemModel.findById(foodId).populate("hotelId");
    res.status(200).json({ message: "Food item fetched", data: foodItem });
  } catch (error) {
    next(error);
  }
};

const updateFoodItem = async (req, res, next) => {
  try {
    const { foodId } = req.params;
    const updateData = { ...req.body };
    
    // Handle image update if file was uploaded
    if (req.file) {
      updateData.foodImg = req.file.filename;
    }

    // Validate price is a positive number if provided
    if (updateData.price && updateData.price < 0) {
      return res.status(400).json({ message: "Price must be a positive number" });
    }

    // Validate foodType if provided
    if (updateData.foodType && !['veg', 'non-veg'].includes(updateData.foodType)) {
      return res.status(400).json({ message: "Food type must be either 'veg' or 'non-veg'" });
    }

    const updatedFood = await FoodItemModel.findByIdAndUpdate(
      foodId,
      updateData,
      { new: true, runValidators: true } // Return updated doc and run validations
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(200).json({
      message: "Food item updated successfully",
      data: updatedFood
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addFood,
  foodImgUpload,
  getAllFoodByHotelId,
  getAllFoodItems,
  getFoodItemById,
  updateFoodItem,
};
