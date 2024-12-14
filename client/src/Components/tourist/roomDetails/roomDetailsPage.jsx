import React from "react";
import "./roomDetails.css";

const RoomDetailsPage = ({ room }) => {
  return (
    <div className="room-details-container">
      {/* Hero Section */}
      <div className="room-hero-section">
        <div className="room-images">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
            alt="Hotel Room"
            className="main-image"
          />
          <div className="image-grid">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"
              alt="Room Detail"
            />
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400"
              alt="Bathroom"
            />
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400"
              alt="View"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="room-main-content">
        <div className="room-header">
          <div className="hotel-title">
            <h1>{room.hotelId?.hotelName}</h1>
            <div className="hotel-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>{room.hotelId?.hotelLocation}</span>
            </div>
          </div>
          <div className="hotel-contact">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>{room.hotelId?.phoneNumber}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{room.hotelId?.email}</span>
            </div>
          </div>
        </div>

        {/* Room Information */}
        <div className="room-info-grid">
          <div className="info-card availability">
            <h2>Room Availability</h2>
            <div className="availability-details">
              <div className="room-type">
                <i className="fas fa-snowflake"></i>
                <h3>AC Rooms</h3>
                <p className="room-count">{room.acRooms} Available</p>
                <p className="room-price">₹{room.acRoomPrice} / night</p>
              </div>
              <div className="room-type">
                <i className="fas fa-fan"></i>
                <h3>Non-AC Rooms</h3>
                <p className="room-count">{room.nonAcRooms} Available</p>
                <p className="room-price">₹{room.nonAcRoomPrice} / night</p>
              </div>
            </div>
          </div>

          <div className="info-card timings">
            <h2>Check-in/Check-out</h2>
            <div className="timing-details">
              <div className="timing">
                <i className="fas fa-clock"></i>
                <h3>Check-in Time</h3>
                <p>{room.checkInTime}</p>
              </div>
              <div className="timing">
                <i className="fas fa-clock"></i>
                <h3>Check-out Time</h3>
                <p>{room.checkOutTime}</p>
              </div>
            </div>
          </div>

          <div className="info-card amenities">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity">
                <i className="fas fa-wifi"></i> Free WiFi
              </div>
              <div className="amenity">
                <i className="fas fa-parking"></i> Parking
              </div>
              <div className="amenity">
                <i className="fas fa-utensils"></i> Restaurant
              </div>
              <div className="amenity">
                <i className="fas fa-concierge-bell"></i> Room Service
              </div>
              <div className="amenity">
                <i className="fas fa-swimming-pool"></i> Pool
              </div>
              <div className="amenity">
                <i className="fas fa-dumbbell"></i> Gym
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="booking-section">
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
