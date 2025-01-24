import { useEffect, useState } from "react";
import { ReviewTaxi } from "./reviewTaxi/review";
import ShowReviewModal from "../../../Components/viewReview/viewReview";
import axiosInstance from "../../../apis/axiosInstance";

const TaxiBookingDetailsContainer = ({ bookingData }) => {
  const {
    pickUpLocation,
    destination,
    pickUpDateTime,
    paymentStatus,
    taxiDriverStatus,
    totalFare,
    travelDistance,
    touristId,
    taxiId,
  } = bookingData;
  const [showReview, setShowReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const openReview = () => {
    setShowReview(true);
  };
  const closeReview = () => {
    setShowReview(false);
  };

  useEffect(() => {
    if (bookingData && bookingData.taxiId) {
      getReviews(bookingData.taxiId?._id);
    }
  }, [bookingData?.taxiId]);
  const getReviews = async (id) => {
    try {
      const res = await axiosInstance.get(`/taxi-rating/taxi/${id}`);
      if (res.status === 200) {
        setReviews(res.data.data);
      }
    } catch (error) {
      console.log("Error on get reviews", error);
    }
  };
  return (
    <div>
      <div className="tw-min-h-screen tw-w-full tw-bg-gray-100 tw-py-10">
        <div className="tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-8">
          <h3 className="tw-text-center tw-text-2xl tw-font-bold tw-mb-6">
            Taxi Booking Details
          </h3>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Pick Up Location</h4>
              <p className="tw-text-gray-700">{pickUpLocation}</p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Destination</h4>
              <p className="tw-text-gray-700">{destination}</p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">
                Pick Up Date & Time
              </h4>
              <p className="tw-text-gray-700">
                {new Date(pickUpDateTime).toLocaleString()}
              </p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Payment Status</h4>
              <p
                className={`tw-text-gray-700 ${
                  paymentStatus === "paid"
                    ? "tw-text-green-500"
                    : "tw-text-red-500"
                }`}
              >
                {paymentStatus === "paid" ? "Paid" : "Not Paid"}
              </p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Driver Status</h4>
              <p className="tw-text-gray-700">
                {taxiDriverStatus === "accepted" ? "Assigned" : "Not Assigned"}
              </p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Total Fare</h4>
              <p className="tw-text-gray-700">₹ {totalFare}</p>
            </div>
            <div>
              <h4 className="tw-font-semibold tw-text-lg">Travel Distance</h4>
              <p className="tw-text-gray-700">{travelDistance} KM</p>
            </div>
            {taxiId?.driverName && (
              <>
                <div>
                  <h4 className="tw-font-semibold tw-text-lg">
                    Taxi Driver Name
                  </h4>
                  <p className="tw-text-gray-700">{taxiId?.driverName}</p>
                </div>
                <div>
                  <h4 className="tw-font-semibold tw-text-lg">
                    Taxi Contact No
                  </h4>
                  <p className="tw-text-gray-700">{taxiId?.contactNo}</p>
                </div>
                <div>
                  <button
                    className="tw-bg-blue-500 tw-p-2 tw-rounded-md tw-text-white"
                    onClick={openReview}
                  >
                    Taxi Reviews{" "}
                  </button>
                </div>
              </>
            )}
          </div>

          {taxiDriverStatus === "accepted" && (
            <div>
              <ReviewTaxi taxiId={taxiId} touristId={touristId} />
            </div>
          )}
        </div>

        {showReview && (
          <ShowReviewModal
            reviews={reviews}
            isOpen={showReview}
            onClose={closeReview}
          />
        )}
      </div>
    </div>
  );
};

export default TaxiBookingDetailsContainer;
