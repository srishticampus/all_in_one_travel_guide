// import React from "react";
// import "./RoomCard.css";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../../../apis/baseURL";
// const BookedRoomCard = ({ room }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="room-card"
//       onClick={() => navigate(`/tourist/room/${room._id}`)}
//     >
//       <div className="room-card-image">
//         <img
//           src={`${BASE_URL}/${room?.roomImg}`}
//           alt={room?.hotelId?.hotelName}
//         />
//       </div>

//       <div className="room-card-content">
//         <div className="hotel-info">
//           <h2>{room?.hotelId?.hotelName}</h2>
//           <p className="location">
//             <i className="fas fa-map-marker-alt"></i>
//             {room?.hotelId?.hotelLocation}
//           </p>
//           <p className="contact">
//             <i className="fas fa-phone"></i> {room?.hotelId?.phoneNumber}
//           </p>
//         </div>

//         <div className="room-details">
//           <div className="room-type">
//             <div className="ac-rooms">
//               <h3>AC Rooms</h3>
//               <p>Available: {room?.acRooms}</p>
//               <p className="price">₹{room?.acRoomPrice}/night</p>
//             </div>
//             <div className="non-ac-rooms">
//               <h3>Non-AC Rooms</h3>
//               <p>Available: {room?.nonAcRooms}</p>
//               <p className="price">₹{room?.nonAcRoomPrice}/night</p>
//             </div>
//           </div>

//           <div className="timing">
//             <div className="check-in">
//               <p>
//                 <strong>Check-in:</strong> {room?.checkInTime}
//               </p>
//             </div>
//             <div className="check-out">
//               <p>
//                 <strong>Check-out:</strong> {room?.checkOutTime}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookedRoomCard;


import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseURL";

const BookedRoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div
      className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-cursor-pointer tw-transition-transform tw-duration-300 hover:tw-scale-105"
      onClick={() => navigate(`/tourist/room/${room._id}`)}
    >
      {/* Room Image */}
      <div className="tw-relative tw-h-48 tw-overflow-hidden">
        <img
          src={`${BASE_URL}/${room?.roomImg}`}
          alt={room?.hotelId?.hotelName}
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>

      {/* Room Content */}
      <div className="tw-p-4">
        {/* Hotel Info */}
        <div className="tw-mb-4">
          <h2 className="tw-text-lg tw-font-bold tw-text-gray-800">
            {room?.hotelId?.hotelName}
          </h2>
          <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
            <i className="fas fa-map-marker-alt tw-mr-2 tw-text-red-500"></i>
            {room?.hotelId?.hotelLocation}
          </p>
          <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
            <i className="fas fa-phone tw-mr-2 tw-text-blue-500"></i>
            {room?.hotelId?.phoneNumber}
          </p>
        </div>

        {/* Room Details */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-4">
          {/* AC Rooms */}
          <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
            <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">AC Rooms</h3>
            <p className="tw-text-sm tw-text-gray-600">Available: {room?.acRooms}</p>
            <p className="tw-text-sm tw-font-medium tw-text-gray-800">₹{room?.acRoomPrice}/night</p>
          </div>

          {/* Non-AC Rooms */}
          <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
            <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">Non-AC Rooms</h3>
            <p className="tw-text-sm tw-text-gray-600">Available: {room?.nonAcRooms}</p>
            <p className="tw-text-sm tw-font-medium tw-text-gray-800">₹{room?.nonAcRoomPrice}/night</p>
          </div>
        </div>

        {/* Timing */}
        <div className="tw-flex tw-justify-between tw-items-center tw-text-sm tw-text-gray-600">
          <div>
            <strong>Check-in:</strong> {room?.checkInTime}
          </div>
          <div>
            <strong>Check-out:</strong> {room?.checkOutTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedRoomCard;
