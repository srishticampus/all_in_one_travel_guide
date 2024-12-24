import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";

const TaxiBookingStatusTable = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_tourist_id") || [];
    if (id) {
      getTaxiData(id);
    }
  }, []);

  const getTaxiData = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/taxi-booking/by-tourist-id/${id}`
      );
      if (response.status === 200) {
        setRequests(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching requests: ", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <table className="tw-w-full tw-table-auto tw-border-collapse">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-px-4 tw-py-2">Pick Up</th>
            <th className="tw-px-4 tw-py-2">Destination</th>

            <th className="tw-px-4 tw-py-2">Travel Distance</th>
            <th className="tw-px-4 tw-py-2">Total Fare</th>
            <th className="tw-px-4 tw-py-2">Driver status</th>
            <th className="tw-px-4 tw-py-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{request.pickUpLocation}</td>
              <td className="tw-px-4 tw-py-2">{request.destination}</td>
              <td className="tw-px-4 tw-py-2">{request.travelDistance}</td>
              <td className="tw-px-4 tw-py-2">{request.totalFare}</td>
              <td className="tw-px-4 tw-py-2">{request.taxiDriverStatus}</td>
              <td className="tw-px-4 tw-py-2">{request.paymentStatus}</td>
              {/* <td className="tw-px-4 tw-py-2">
                <button
                  className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-blue-600"
                  onClick={openModal}
                >
                  Book
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiBookingStatusTable;
