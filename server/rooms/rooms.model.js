const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
    unique: true
  },
  
  totalRooms: {
    type: Number,
    required: true,
    min: 1
  },
  acRooms: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function(v) {
        return v <= this.totalRooms;
      },
      message: 'AC rooms cannot exceed total rooms'
    }
  },
  nonAcRooms: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function(v) {
        return (v + this.acRooms) === this.totalRooms;
      },
      message: 'Sum of AC and Non-AC rooms must equal total rooms'
    }
  },

  // Pricing
  acRoomPrice: {
    type: Number,
    required: true,
    min: 0
  },
  nonAcRoomPrice: {
    type: Number,
    required: true,
    min: 0
  },

  checkInTime: {
    type: String,
    default: "12:00 PM"
  },
  checkOutTime: {
    type: String,
    default: "11:00 AM"
  },
  
}, {
  timestamps: true
});

const RoomModel = mongoose.model('Room', roomSchema);

module.exports = RoomModel;
