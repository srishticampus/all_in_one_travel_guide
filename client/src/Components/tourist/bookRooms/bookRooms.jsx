import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import "./RoomCard.css";
import RoomCard from "./roomCard";
const BookRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filterRooms, setFilterRooms] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
    const response = await axiosInstance.get("/rooms");
    if (response.status === 200) {
      const output = response.data?.data?.reverse() || [];
      setRooms(output);
      setFilterRooms(output);
    }
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    const filteredRooms = rooms.filter(
      (room) =>
        room.acRoomPrice <= Number(value) ||
        room.nonAcRoomPrice <= Number(value)
    );
    setFilterRooms(filteredRooms);
  };
  return (
    <div>
      <h4 className="tw-text-center tw-mt-20">Available Rooms</h4>
      <div className="tw-flex tw-justify-around tw-items-center tw-mt-5">
        <div className="tw-flex tw-items-center tw-justify-center">
          <input
            type="text"
            placeholder="Search by hotel name or location"
            className="tw-p-2 tw-rounded-lg tw-border-2 tw-border-gray-300 tw-w-80"
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              if (value) {
                const myFilteredRooms = rooms.filter((room) =>
                  room.hotelId?.hotelName?.toLowerCase().includes(value) ||
                  room.hotelId?.hotelLocation?.toLowerCase().includes(value)
                );
                setFilterRooms(myFilteredRooms);
              }else {
                setFilterRooms(rooms);
              }
            }}
          />
        </div>

        <div>
          <input
            type="range"
            className="tw-appearance-none tw-w-40 tw-h-2 tw-bg-gray-300 tw-rounded-lg tw-outline-none tw-transition"
            min={0}
            max={100000}
            step={100}
            onChange={handleFilter}
          />
          <span className="tw-ml-5 tw-font-semibold">
            {`Price Range: 0 - ${maxPrice}`}
          </span>
        </div>
      </div>
      <div className="rooms-container">
        {filterRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default BookRooms;
