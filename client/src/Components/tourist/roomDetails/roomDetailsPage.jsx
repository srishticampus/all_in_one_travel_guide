import React from "react";
import "./roomDetails.css";

const RoomDetailsPage = ({ room }) => {
  return (
    <div className="room-details-container">
      <div className="room-hero ">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
          alt="Hotel Room"
          className="room-hero-image tw-mx-auto tw-h-auto tw-max-h-[400px] tw-w-full"
        />
      </div>

      <div className="room-info-grid">
        <div className="info-card">
          <h3>Room Availability</h3>
          <p>AC Rooms: {room.acRooms}</p>
          <p>Non-AC Rooms: {room.nonAcRooms}</p>
          <p>Total Rooms: {room.totalRooms}</p>
        </div>

        <div className="info-card">
          <h3>Pricing</h3>
          <p>AC Room: ₹{room.acRoomPrice}/night</p>
          <p>Non-AC Room: ₹{room.nonAcRoomPrice}/night</p>
        </div>

        <div className="info-card">
          <h3>Timings</h3>
          <p>Check-in: {room.checkInTime}</p>
          <p>Check-out: {room.checkOutTime}</p>
        </div>

        <div className="info-card">
          <h3>Hotel Details</h3>
          <p>Name: {room.hotelId?.hotelName}</p>
          <p>Location: {room.hotelId?.hotelLocation}</p>
          <p>Contact: {room.hotelId?.phoneNumber}</p>
          <p>Email: {room.hotelId?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
