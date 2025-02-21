import { useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
import { X } from "lucide-react";
import axiosInstance from "../../../apis/axiosInstance";
import { toast } from "react-hot-toast";

const BookedPackageCard = ({ item, booking, trigger }) => {
  const [cancelModalActive, setCancelModalActive] = useState(false);
  const onClose = () => setCancelModalActive(false);
  const cancelBooking = async (id) => {
    console.log("idd ", id);
    try {
      const res = await axiosInstance.patch(
        "/package-booking/cancelPackageBookingById/" + id
      );
      if (res.status === 200) {
        toast.success("Package cancelled.");
      }
    } catch (error) {
      console.log("err on cancel booking", error);
    } finally {
      trigger();
      onClose();
    }
  };
  return (
    <>
      <div className="tw-mt-10 tw-w-5/12 tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden">
        <figure className="tw-relative">
          <img
            className="tw-w-full tw-h-64 tw-object-cover"
            src={`${BASE_URL}/${item?.packagePhoto}`}
            alt="Experience The Great Holiday On Beach"
            loading="lazy"
          />
        </figure>

        <div className="tw-p-6">
          <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">
            {item?.packageName}
          </h3>

          <p className="tw-text-gray-600 tw-h-32 tw-overflow-y-auto tw-mb-4">
            {item?.packageDescription}
          </p>

          <ul className="tw-flex tw-flex-wrap tw-gap-4 tw-mb-6">
            <li className="tw-flex tw-items-center">
              <div className="tw-flex tw-items-center tw-text-gray-500">
                <ion-icon name="time" className="tw-mr-2"></ion-icon>
                <p className="tw-text-sm tw-mb-0">
                  {item?.days}D/{item?.nights}N
                </p>
              </div>
            </li>

            <li className="tw-flex tw-items-center">
              <div className="tw-flex tw-items-center tw-text-gray-500">
                <ion-icon name="people" className="tw-mr-2"></ion-icon>
                <p className="tw-text-sm tw-mb-0">
                  TAS: {item?.totalAvailableSeats}
                </p>
              </div>
            </li>

            <li className="tw-flex tw-items-center">
              <div className="tw-flex tw-items-center tw-text-gray-500">
                <ion-icon name="location" className="tw-mr-2"></ion-icon>
                <p className="tw-text-sm tw-mb-0">{item?.startingDate}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="tw-bg-gray-50 tw-p-4 tw-border-t tw-flex tw-flex-col tw-items-center">
          <div className="tw-flex tw-items-center tw-mb-2">
            {/* <p className="tw-text-sm tw-text-gray-500">({item?.review?.length || 0} reviews)</p> */}

            <div className="tw-flex tw-text-yellow-500 tw-ml-2">
              {[...Array(5)].map((_, index) => (
                <ion-icon
                  key={index}
                  name="star"
                  className="tw-text-sm"
                ></ion-icon>
              ))}
            </div>
          </div>

          <p className="tw-text-lg tw-font-bold tw-text-green-600">
            {item?.costPerHead}
            <span className="tw-text-sm tw-text-gray-500 tw-ml-2">Paid</span>
          </p>

          <div className="tw-flex tw-justify-between tw-w-full tw-align-middle">
            <div className="tw-flex tw-align-middle tw-py-3  tw-text-sm tw-font-medium tw-text-black">
              Status: {booking?.status}
            </div>
            {booking?.status !== "cancelled" && (
              <div
                onClick={() => setCancelModalActive(true)}
                className=" tw-text-sm tw-font-medium tw-bg-red-500 tw-text-white tw-px-4 tw-py-3 tw-rounded-md tw-cursor-pointer "
              >
                Cancel Booking
              </div>
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
                onClick={() => cancelBooking(booking._id)}
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

export default BookedPackageCard;

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
