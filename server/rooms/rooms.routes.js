const roomRoutes = require("express").Router();
const {
  createRoom,
  geAllRooms,
  getRoomById,
  getRoomsByHotelId,
  roomImgUpload,
  editRoomById,
} = require("./rooms.controller");

roomRoutes.post("/", roomImgUpload, createRoom);
roomRoutes.get("/", geAllRooms);
roomRoutes.get("/:id", getRoomById);
roomRoutes.get("/hotel/:hotelId", getRoomsByHotelId);
roomRoutes.patch("/:id", editRoomById);

module.exports = roomRoutes;
