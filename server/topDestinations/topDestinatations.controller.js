// create a middleware for adding 2 tourist place photos
const multer = require("multer");
const { TopDestinationModel } = require("./topDestinations.model");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allwedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allwedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG and PNG files are allowed."));
  }
};
const destinationImages = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).fields([
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
]);

const addTouristPlace = async (req, res, next) => {
  try {
    const { img1, img2 } = req.files;
    const { title, description, packages, rooms } = req.body;
    const newTouristPlace = new TopDestinationModel({
      title,
      description,
      img1: img1[0].filename,
      img2: img2[0].filename,
      packages,
      rooms,
    });
    const savedTouristPlace = await newTouristPlace.save();
    return res.status(201).json({
      message: "Tourist Place added successfully",
      data: savedTouristPlace,
    });
  } catch (error) {
    next(error);
  }
};

const getAllDestination = async (req, res, next) => {
  try {
    const allDestination = await TopDestinationModel.find()
      .populate({
        path: "packages",
        strictPopulate: false,
      })
      .populate({
        path: "rooms",
        strictPopulate: false,
      })
      .exec();
    return res.status(200).json({
      message: "All Destination",
      data: allDestination,
    });
  } catch (error) {
    next(error);
  }
};

const getDestinationById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const destination = await TopDestinationModel.findById(id)
      .populate({
        path: "packages",
        populate: {
          path: "agencyId",
          strictPopulate: false,
        },
        strictPopulate: false,
      })
      .populate({
        path: "rooms",
        populate: {
          path: "hotelId",
          strictPopulate: false,
        },
        strictPopulate: false,
      }).exec();
    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }
    return res.status(200).json({
      message: "Destination found",
      data: destination,
    });
  } catch (error) {
    next(error);
  }
};

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedDestination = await TopDestinationModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Destination deleted successfully",
      data: deletedDestination,
    });
  } catch (error) {
    next(error);
  }
};
const updateDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    
    // Remove undefined or null values from the update data
    Object.keys(updateData).forEach(key => {
      if (updateData[key] === undefined || updateData[key] === null) {
        delete updateData[key];
      }
    });

    // Handle image updates if files were uploaded
    if (req.files) {
      if (req.files.img1) {
        updateData.img1 = req.files.img1[0].filename;
      }
      if (req.files.img2) {
        updateData.img2 = req.files.img2[0].filename;
      }
    }

    // Convert string arrays to ObjectIds if they exist
    if (updateData.packages && Array.isArray(updateData.packages)) {
      updateData.packages = updateData.packages.map(pkg => 
        mongoose.Types.ObjectId(pkg)
      );
    }
    
    if (updateData.rooms && Array.isArray(updateData.rooms)) {
      updateData.rooms = updateData.rooms.map(room => 
        mongoose.Types.ObjectId(room)
      );
    }

    const updatedDestination = await TopDestinationModel.findByIdAndUpdate(
      id,
      { $set: updateData }, // Using $set for partial update
      { new: true, runValidators: true } // Return updated doc and run schema validations
    ).populate('packages rooms');

    if (!updatedDestination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    return res.status(200).json({
      message: "Destination updated successfully",
      data: updatedDestination,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addTouristPlace,
  destinationImages,
  getAllDestination,
  deleteDestination,
  getDestinationById,
  updateDestination,
};
