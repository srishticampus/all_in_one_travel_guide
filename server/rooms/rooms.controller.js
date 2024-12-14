const RoomModel = require("./rooms.model");
const createRoom = async (req, res, next) => {
  try {
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

    const room = await RoomModel({
      hotelId,
      totalRooms,
      acRooms,
      nonAcRooms,
      checkInTime,
      checkOutTime,
      acRoomPrice,
      nonAcRoomPrice,
    });
    await room.save()
    res.status(201).json({ message: "Room created successfully", data: room });
  } catch (error) {
    next(error);
  }
};

const geAllRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find();
    res
      .status(200)
      .json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const room = await RoomModel.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ message: "Room fetched successfully", data: room });
  } catch (error) {
    next(error);
  }
};

const getRoomsByHotelId = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const rooms = await RoomModel.find({ hotelId });
    res
      .status(200)
      .json({ message: "Rooms fetched successfully", data: rooms });
  } catch (error) {
    next(error);
  }
};
module.exports = { createRoom, geAllRooms, getRoomById, getRoomsByHotelId };
