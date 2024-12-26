import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { SpaceContext } from "antd/es/space";

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
        let data = response.data?.data || [];
        data.reverse();
        setRequests(data);
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
            <th className="tw-px-4 tw-py-2">No.</th>
            <th className="tw-px-4 tw-py-2">Pick Up</th>
            <th className="tw-px-4 tw-py-2">Destination</th>

            <th className="tw-px-4 tw-py-2">Travel Distance</th>
            <th className="tw-px-4 tw-py-2">Total Fare</th>
            <th className="tw-px-4 tw-py-2">Driver status</th>
            <th className="tw-px-4 tw-py-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, idx) => (
            <tr key={request._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{idx + 1}</td>
              <td className="tw-px-4 tw-py-2">{request.pickUpLocation}</td>
              <td className="tw-px-4 tw-py-2">{request.destination}</td>
              <td className="tw-px-4 tw-py-2">{request.travelDistance}</td>
              <td className="tw-px-4 tw-py-2">{request.totalFare}</td>
              <td className="tw-px-4 tw-py-2">
                {request.taxiDriverStatus === "pending" ? (
                  <span className="tw-text-red-500"> Pending</span>
                ) : (
                  <span className="tw-text-green-500">Accepted</span>
                )}
              </td>
              <td className="tw-px-4 tw-py-2">
                {request.taxiDriverStatus === "pending" ? (
                  <span className="tw-text-red-500"> Not Allowed</span>
                ) : (
                  <>
                    <td className=" tw-py-2">
                      {request.paymentStatus === "pending" ? (
                        <button className="tw-px-4 tw-text-white tw-bg-green-500">Pay</button>
                      ) : (
                        <h4 className="tw-text-green-500">Paid</h4>
                      )}
                    </td>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiBookingStatusTable;
