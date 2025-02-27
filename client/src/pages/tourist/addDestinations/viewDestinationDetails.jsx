import { useEffect, useState } from "react";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import Footer from "../../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import { DestinationPackageCardContainer } from "../../../Components/tourist/packageCard/destPackageCardContainer";
import { DestinationRooms } from "../../../Components/tourist/bookRooms/destinationRooms";
export const ViewDestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState({});
  console.log("dest", destination);
  useEffect(() => {
    getDestinationById();
  }, []);
  const getDestinationById = async () => {
    try {
      const res = await axiosInstance.get("/top-destinations/" + id);
      setDestination(res.data?.data || {});
    } catch (error) {
      console.log(error);
    }
  };
  console.log("test", destination.rooms);
  return (
    <div>
      <TouristNavbar />

      <div className="tw-w-8/12 tw-mx-auto">
        <div className="tw-relative ">
          <div className="tw-aspect-video tw-relative">
            <img
              src={`${BASE_URL}${destination.img1}`}
              alt={destination.title}
              className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg tw-mt-4"
            />
          </div>
        </div>

        <div className="tw-p-6">
          <div className="tw-flex tw-gap-4 tw-mb-4">
            <img
              src={`${BASE_URL}${destination.img2}`}
              alt={`${destination.title} thumbnail`}
              className="tw-w-32 tw-h-32 tw-rounded-lg tw-object-cover"
            />
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-2">
                {destination.title}
              </h2>
              <p className="tw-text-gray-600 tw-whitespace-pre-line">
                {destination.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {destination?.rooms?.length > 0 && (
        <DestinationRooms filterRooms={destination.rooms} />
      )}

      {destination?.packages?.length > 0 && (
        <DestinationPackageCardContainer filterdPacks={destination.packages} />
      )}

      <Footer />
    </div>
  );
};
