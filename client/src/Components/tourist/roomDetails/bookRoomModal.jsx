import { useForm } from "react-hook-form";
import { hotelBookingProcess } from "../../../apis/tourist/paymentService";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookRoomModal = ({ item, onClose }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(1);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors
  } = useForm();

  const expiryDate = watch("expiryDate");

  useEffect(() => {
    const acRoomPrice = item.acRoomPrice || 0;
    const nonAcRoomPrice = item.nonAcRoomPrice || 0;
    if (watch("roomType") === "AC") {
      setTotalPrice(acRoomPrice * numberOfDays);
    } else {
      setTotalPrice(nonAcRoomPrice * numberOfDays);
    }
  }, [watch("roomType"), numberOfDays]);

  useEffect(() => {
    calculateNoOfDays();
  }, [watch("checkInDate"), watch("checkOutDate")]);

  useEffect(() => {
    if (expiryDate && expiryDate.length === 5) {
      validateExpiryDate(expiryDate);
    }
  }, [expiryDate]);

  const validateExpiryDate = (date) => {
    if (!date) return true;
    
    const [month, year] = date.split('/');
    if (!month || !year) return false;
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    
    // Convert to numbers
    const expMonth = parseInt(month, 10);
    const expYear = parseInt(year, 10);
    
    if (expYear < currentYear || 
        (expYear === currentYear && expMonth < currentMonth)) {
      setError("expiryDate", {
        type: "manual",
        message: "Card has expired"
      });
      return false;
    }
    
    clearErrors("expiryDate");
    return true;
  };

  const calculateNoOfDays = () => {
    const inDate = watch("checkInDate");
    const outDate = watch("checkOutDate");
    if (inDate && outDate) {
      const checkIn = new Date(inDate);
      const checkOut = new Date(outDate);

      if (checkOut < checkIn) {
        toast.error("Checkout date should not be before checkin date");
        return false;
      }
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfDays(diffDays);
      return true;
    } else {
      return false;
    }
  };

  // Format expiry date as user types (MM/YY)
  const formatExpiryDate = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
  };

  const onSubmit = (data) => {
    const {
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
      checkInDate,
      checkOutDate,
      roomType,
    } = data;
    
    if (
      !cardHolderName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !checkInDate ||
      !checkOutDate ||
      !roomType 
    ) {
      console.log("Please fill all the fields");
      return;
    }

    // Validate expiry date before submission
    if (!validateExpiryDate(expiryDate)) {
      return;
    }

    const roomId = item._id || null;
    const touristId = localStorage.getItem("travel_guide_tourist_id") || null;
    const hotelId = item.hotelId?._id || null;

    if (!roomId || !touristId || !hotelId) {
      console.log("Please login to book the package");
      return;
    }
    
    if (!calculateNoOfDays()) {
      return;
    }
    
    const serializedData = {
      roomId,
      touristId,
      hotelId,
      accountHolderName: cardHolderName,
      accountNumber: cardNumber,
      expiryDate,
      cvv,
      checkInDate,
      checkOutDate,
      roomType,
      numberOfDays,
      totalPrice
    };

    handlePayment(serializedData);
  };

  const handlePayment = async (data) => {
    try {
      const res = await hotelBookingProcess(data);
      if (res) {
        toast.success("Room booked successfully");
        onClose();
        navigate('/tourist/booked-rooms');
      }
    } catch (error) {
      console.log("Error on payment process", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-rounded-lg tw-p-8 tw-w-full tw-max-w-md tw-mx-4 tw-max-h-96 tw-overflow-auto">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
          Payment Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
          <div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  {...register("checkInDate", {
                    required: "Check-in date is required",
                  })}
                  className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                    errors.checkInDate
                      ? "tw-border-red-500"
                      : "tw-border-gray-300"
                  } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
                />
                {errors.checkInDate && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                    {errors.checkInDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  {...register("checkOutDate", {
                    required: "Check-out date is required",
                  })}
                  className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                    errors.checkOutDate
                      ? "tw-border-red-500"
                      : "tw-border-gray-300"
                  } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
                />
                {errors.checkOutDate && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                    {errors.checkOutDate.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <p>Number of days: {numberOfDays}</p>
            </div>

            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Room Type
            </label>
            <select
              {...register("roomType", {
                required: "Room type is required",
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.roomType ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            >
              <option value="">Select Room Type</option>
              <option value="AC">AC</option>
              <option value="NON-AC">Non-AC</option>
            </select>
            {errors.roomType && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.roomType.message}
              </p>
            )}
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Card Holder Name
            </label>

            <input
              type="text"
              {...register("cardHolderName", {
                required: "Card holder name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter a valid name",
                },
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.cardHolderName
                  ? "tw-border-red-500"
                  : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.cardHolderName && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.cardHolderName.message}
              </p>
            )}
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Card Number
            </label>
            <input
              type="text"
              maxLength="16"
              {...register("cardNumber", {
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Please enter a valid 16-digit card number",
                },
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.cardNumber ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.cardNumber && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                {...register("expiryDate", {
                  required: "Expiry date is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: "Enter valid date (MM/YY)",
                  },
                  validate: validateExpiryDate
                })}
                onChange={formatExpiryDate}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.expiryDate ? "tw-border-red-500" : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.expiryDate && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.expiryDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                CVV
              </label>
              <input
                type="password"
                maxLength="3"
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "Enter valid CVV",
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.cvv ? "tw-border-red-500" : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.cvv && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.cvv.message}
                </p>
              )}
            </div>
          </div>

          <div className="tw-flex tw-justify-end tw-space-x-4 tw-mt-8">
            <button
              type="button"
              onClick={onClose}
              className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-gray-100 tw-rounded-md hover:tw-bg-gray-200 tw-transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-600 tw-rounded-md hover:tw-bg-blue-700 tw-transition-colors"
            >
              Pay ₹ {totalPrice}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookRoomModal;