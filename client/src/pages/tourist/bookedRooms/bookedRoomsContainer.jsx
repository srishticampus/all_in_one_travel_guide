import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import "./packageCard.scss";
import { useNavigate } from "react-router-dom";
import BookedRoomCard from "../../../Components/tourist/bookRooms/bookedRoomCard";
const BookedRoomsContainer = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [filterRooms, setFilterRooms] = useState([]);
  const [trigerRerender, setTrigerRerender] = useState(false);
  const [maxPrice, setMaxPrice] = useState(100000);

  const trigger = () => {
    setTrigerRerender(!trigerRerender);
  };
  useEffect(() => {
    const activeTouristId =
      localStorage.getItem("travel_guide_tourist_id") || null;
    if (activeTouristId) {
      getRooms(activeTouristId);
    } else {
      navigate("/tourist/home");
    }
  }, [trigerRerender]);

  const getRooms = async (activeTouristId) => {
    try {
      const res = await axiosInstance.get(
        `/rooms-booking/tourist/${activeTouristId}`
      );
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setRooms(data);
        setFilterRooms(data);
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    const filteredRooms = rooms.filter((room) => {
      console.log('roo', room)
      return (
        room?.roomId?.acRoomPrice <= Number(value) ||
        room?.roomId?.nonAcRoomPrice <= Number(value)
      );
    });

    setFilterRooms(filteredRooms);
  };

  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-16">Booked Rooms</h3>
      <div className="tw-flex tw-justify-around tw-items-center tw-mt-5">
        <div className="tw-flex tw-items-center tw-justify-center">
          <input
            type="text"
            placeholder="Search by hotel name"
            className="tw-p-2 tw-rounded-lg tw-border-2 tw-border-gray-300 tw-w-80"
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              if (value) {
                const myFilteredRooms = rooms.filter((room) =>
                  room.hotelId?.hotelName?.toLowerCase().includes(value)
                );
                setFilterRooms(myFilteredRooms);
              } else {
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
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between  tw-bg-neutral-50">
        {filterRooms.map((item) => {
          return (
            <BookedRoomCard
              key={item._id}
              item={item}
              room={item?.roomId}
              hotel={item?.hotelId}
              trigger={trigger}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BookedRoomsContainer;
