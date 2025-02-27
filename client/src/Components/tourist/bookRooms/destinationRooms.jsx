import "./RoomCard.css";
import RoomCard from "./roomCard";
export const DestinationRooms = ({ filterRooms }) => {
  return (
    <div>
      <h4 className="tw-text-center tw-mt-20">Available Rooms</h4>
      <div className="rooms-container">
        {filterRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};
