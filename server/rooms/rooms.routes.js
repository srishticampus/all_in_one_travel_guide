const roomRoutes = require('express').Router();
const {createRoom, geAllRooms, getRoomById, getRoomsByHotelId} = require('./rooms.controller')

roomRoutes.post('/', createRoom)
roomRoutes.get('/', geAllRooms)
roomRoutes.get('/:id', getRoomById)
roomRoutes.get('/hotel/:hotelId', getRoomsByHotelId)

module.exports = roomRoutes;

