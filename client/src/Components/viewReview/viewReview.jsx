import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0  tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className="tw-bg-white tw-h-96 tw-overflow-auto tw-rounded-lg tw-p-6 tw-max-w-2xl tw-w-full tw-mx-4 tw-relative">
        <button
          onClick={onClose}
          className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-h-6 tw-w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const ShowReviewModal = ({ isOpen, onClose, reviews }) => {
  console.log("reviews", reviews);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="tw-text-2xl tw-font-bold tw-mb-4">Reviews</h3>
      <div >
        {reviews?.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="tw-mb-4">
              <h4 className="tw-font-semibold tw-text-lg">
                {review?.touristId?.name}
              </h4>
              <div className="tw-flex tw-items-center">
                <span className="tw-text-yellow-500 tw-mr-0">
                  {"★".repeat(review.rating)}
                </span>
                <span className="tw-text-gray-500">
                  {"★".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="tw-text-gray-700">
                {review.review}
              </p>
            </div>
          ))
        ) : (
          <p className="tw-text-gray-700">No reviews available.</p>
        )}
      </div>
    </Modal>
  );
};

export default ShowReviewModal;
