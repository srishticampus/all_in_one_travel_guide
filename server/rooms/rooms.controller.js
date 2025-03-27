const RoomModel = require("./rooms.model");
const multer = require("multer");
const fs = require("fs");

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
    "image/gif",
    "image/svg+xml",
    "image/webp",
    "image/bmp",
    "image/tiff",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG, PNG, and PDF files are allowed."));
  }
};

const roomImgUpload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
}).fields([
  { name: "roomImg", maxCount: 1 },
  { name: "roomInfo", maxCount: 1 },
]);

// Create Room
const createRoom = async (req, res, next) => {
  try {
    const roomImg = req.files.roomImg ? req.files.roomImg[0].filename : "";
    const roomInfo = req.files.roomInfo ? req.files.roomInfo[0].filename : "";

    const {
      hotelId,
      totalRooms,
      acRooms,
      nonAcRooms,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
    } = req.body;

    const isRoomsAlreadyCreated = await RoomModel.findOne({ hotelId });
    if (isRoomsAlreadyCreated) {
      return res
        .status(400)
        .json({ message: "Rooms already exist for this hotel" });
    }

    const room = new RoomModel({
      hotelId,
      totalRooms,
      acRooms,
      nonAcRooms,
      roomImg,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
      roomImg,
      roomInfo,
    });

    await room.save();
    res.status(201).json({ message: "Room created successfully", data: room });
  } catch (error) {
    next(error);
  }
};

// Edit Room by ID (including updating images)
const editRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      totalRooms,
      acRooms,
      nonAcRooms,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
    } = req.body;

    let obj = {};

    if (totalRooms) obj.totalRooms = totalRooms;
    if (acRooms) obj.acRooms = acRooms;
    if (nonAcRooms) obj.nonAcRooms = nonAcRooms;
    if (checkInTime) obj.checkInTime = checkInTime;
    if (checkOutTime) obj.checkOutTime = checkOutTime;
    if (acRoomPrice) obj.acRoomPrice = acRoomPrice;
    if (nonAcRoomPrice) obj.nonAcRoomPrice = nonAcRoomPrice;

    // Check if new images are uploaded
    if (req.files.roomImg) {
      const newRoomImg = req.files.roomImg[0].filename;
      obj.roomImg = newRoomImg;

      // Delete the old image file if it exists
      const room = await RoomModel.findById(id);
      if (room && room.roomImg) {
        fs.unlink(`./upload/${room.roomImg}`, (err) => {
          if (err) console.error("Failed to delete old image:", err);
        });
      }
    }

    if (req.files.roomInfo) {
      obj.roomInfo = req.files.roomInfo[0].filename;
    }

    const room = await RoomModel.findByIdAndUpdate(id, obj, { new: true });

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ message: "Room edited successfully", data: room });
  } catch (error) {
    next(error);
  }
};

// Get All Rooms
const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find().populate("hotelId");
    res.status(200).json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};

// Get Room by ID
const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await RoomModel.findById(id).populate("hotelId").exec();
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room fetched successfully", data: room });
  } catch (error) {
    next(error);
  }
};

// Get Rooms by Hotel ID
const getRoomsByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const room = await RoomModel.findOne({ hotelId });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Rooms fetched successfully", data: room });
  } catch (error) {
    next(error);
  }
};

// Get Booked Rooms by Tourist ID
const getBookedRoomsByTouristId = async (req, res, next) => {
  try {
    const { touristId } = req.params;
    const rooms = await RoomModel.find({ touristId });
    res.status(200).json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRoom,
  getAllRooms,
  getRoomById,
  getRoomsByHotelId,
  roomImgUpload,
  getBookedRoomsByTouristId,
  editRoomById,
};
