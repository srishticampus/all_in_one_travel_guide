const express = require("express");
const roomRoutes = express.Router();
const {
  createRoom,
  getAllRooms,
  getRoomById,
  getRoomsByHotelId,
  roomImgUpload,
  editRoomById,
} = require("./rooms.controller");

// Create Room
roomRoutes.post("/", roomImgUpload, createRoom);

// Get All Rooms
roomRoutes.get("/", getAllRooms);

// Get Room by ID
roomRoutes.get("/:id", getRoomById);

// Get Rooms by Hotel ID
roomRoutes.get("/hotel/:hotelId", getRoomsByHotelId);

// Edit Room by ID (including image update)
roomRoutes.patch("/:id", roomImgUpload, editRoomById);

module.exports = roomRoutes;
