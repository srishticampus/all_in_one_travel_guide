import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseURL";
import { Phone, Mail, MapPin, X } from "lucide-react";
import axiosInstance from "../../../apis/axiosInstance";
import { toast } from "react-hot-toast";

const BookedRoomCard = ({ room, hotel, item, trigger }) => {
  const [cancelModalActive, setCancelModalActive] = useState(false);
  const onClose = () => setCancelModalActive(false);
  const cancelBooking = async (id) => {
    try {
      const res = await axiosInstance.patch(
        "/rooms-booking/cancelBookingById/" + id
      );
      if (res.status === 200) {
        toast.success("Package cancelled.");
      }
    } catch (error) {
      console.log("err on cancel booking", error);
    } finally {
      trigger()
      onClose();
    }
  };
  return (
    <>
      <div className=" tw-bg-white tw-w-128 tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-transition-transform tw-duration-300 hover:tw-scale-105">
        {/* Room Image */}
        <div className="tw-relative tw-min-w-128 tw-h-48 tw-overflow-hidden">
          <img
            src={`${BASE_URL}/${room?.roomImg}`}
            alt={room?.hotelId?.hotelName}
            className="tw-w-full tw-h-full tw-object-cover"
          />
        </div>

        {/* Room Content */}
        <div className="tw-p-4">
          {/* Hotel Info */}
          <div className="tw-mt-3">
            <div className="tw-flex tw-justify-between">
              <h2 className="tw-text-lg tw-font-bold tw-text-gray-800">
                Hotel Name: {hotel?.hotelName}
              </h2>
              <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
                <i className="fas fa-map-marker-alt tw-mr-2 tw-text-red-500"></i>
                <MapPin />
                {hotel?.hotelLocation}
              </p>
            </div>
            <div className="tw-flex tw-justify-between">
              <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
                <Phone /> &nbsp; {hotel?.phoneNumber}
              </p>
              <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
                <Mail /> &nbsp; {hotel?.email}
              </p>
            </div>
          </div>
          <div className="tw-flex tw-justify-between tw-items-center tw-text-sm tw-text-gray-600">
            <div>
              <strong>Check-in:</strong> {room?.checkInTime}
            </div>
            <div>
              <strong>Check-out:</strong> {room?.checkOutTime}
            </div>
          </div>
          {/* todo fix this */}
          <div className="tw-flex tw-justify-between tw-items-center tw-text-sm tw-text-gray-600">
            <div>
              <strong>Total Price:</strong>{" "}
              {item?.totalPrice || room?.nonAcRoomPrice}
            </div>
            <div>
              <strong>Number of days:</strong> {item?.numberOfDays || 1}
            </div>
          </div>

          {/* Room Details */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mt-3">
            {/* AC Rooms */}
            <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
              <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">
                AC Rooms
              </h3>
              <p className="tw-text-sm tw-text-gray-600">
                Available: {room?.acRooms}
              </p>
              <p className="tw-text-sm tw-font-medium tw-text-gray-800">
                ₹{room?.acRoomPrice}/night
              </p>
            </div>

            {/* Non-AC Rooms */}
            <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
              <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">
                Non-AC Rooms
              </h3>
              <p className="tw-text-sm tw-text-gray-600">
                Available: {room?.nonAcRooms}
              </p>
              <p className="tw-text-sm tw-font-medium tw-text-gray-800">
                ₹{room?.nonAcRoomPrice}/night
              </p>
            </div>
          </div>

          <div className="tw-flex tw-items-center">
            <p className="tw-pt-4">Status: {item?.status}</p>

            {item?.status !== "cancelled" && (
              <button
                onClick={() => setCancelModalActive(true)}
                className="tw-ml-auto tw-bg-red-500 hover:tw-bg-red-600 tw-text-white tw-py-2 tw-px-4 tw-rounded-lg tw-transition-colors"
              >
                {" "}
                Cancel{" "}
              </button>
            )}
          </div>
        </div>
      </div>
      {cancelModalActive && (
        <Modal onClose={onClose} className="tw-p-5  ">
          <div className="tw-w-80">
            <h4>Cancel Booking?</h4>
            <p className="mt-5">
              {" "}
              You won't get your money back. Are you sure you want to cancel the
              booking?
            </p>
            <div className="tw-flex tw-justify-end tw-w-full tw-items-center">
              <button
                className="tw-text-sm tw-font-medium tw-bg-green-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-cursor-pointer"
                onClick={() => {
                  console.log("testing..");
                  cancelBooking(item._id);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BookedRoomCard;

const Modal = ({ children, onClose, className = "" }) => {
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-flex tw-items-center tw-justify-center tw-p-4 tw-z-50">
      <div
        className={` ${className} tw-relative tw-bg-white tw-rounded-lg  tw-max-h-[90vh] tw-overflow-y-auto `}
      >
        <button
          onClick={onClose}
          className="tw-absolute tw-right-4 tw-top-4 tw-z-10 tw-p-2 tw-bg-white/80 tw-rounded-full hover:tw-bg-white/90 tw-transition-colors"
        >
          <X className="tw-w-6 tw-h-6 tw-text-gray-800" />
        </button>
        {children}
      </div>
    </div>
  );
};
