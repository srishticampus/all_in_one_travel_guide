import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";

const TaxiContainer = () => {
  const [taxis, setTaxis] = useState([]);

  useEffect(() => {
    getTaxiData();
  }, []);

  const getTaxiData = async () => {
    try {
      const response = await axiosInstance.get("/taxi/get-all-taxies");
      if (response.status === 200) {
        setTaxis(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching taxis: ", error);
    }
  };

  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <table className="tw-w-full tw-table-auto tw-border-collapse">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-px-4 tw-py-2">Driver Name</th>
            <th className="tw-px-4 tw-py-2">Contact No</th>
            
            <th className="tw-px-4 tw-py-2">Duty Area</th>
            <th className="tw-px-4 tw-py-2">Charge Per Km</th>
            <th className="tw-px-4 tw-py-2">Work Experience</th>
            <th className="tw-px-4 tw-py-2">Book</th>
          </tr>
        </thead>
        <tbody>
          {taxis.map((taxi) => (
            <tr key={taxi._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{taxi.driverName}</td>
              <td className="tw-px-4 tw-py-2">{taxi.contactNo}</td>
              <td className="tw-px-4 tw-py-2">{taxi.dutyArea}</td>
              <td className="tw-px-4 tw-py-2">{taxi.chargePerKm}</td>
              <td className="tw-px-4 tw-py-2">{taxi.workExperience}</td>
              <td className="tw-px-4 tw-py-2">
                <button className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-blue-600">
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiContainer;
