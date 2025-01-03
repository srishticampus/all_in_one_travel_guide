import React from 'react';
import Modal from './ui/modal';

const ViewDestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <Modal onClose={onClose} className="tw-max-w-4xl">
      <div className="tw-relative">
        <div className="tw-aspect-video tw-relative">
          <img
            src={destination.mainImage}
            alt={destination.title}
            className="tw-w-full tw-h-full tw-object-cover"
          />
        </div>
      </div>

      <div className="tw-p-6">
        <div className="tw-flex tw-gap-4 tw-mb-4">
          <img
            src={destination.thumbnailImage}
            alt={`${destination.title} thumbnail`}
            className="tw-w-32 tw-h-32 tw-rounded-lg tw-object-cover"
          />
          <div>
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-2">{destination.title}</h2>
            <p className="tw-text-gray-600 tw-whitespace-pre-line">{destination.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDestinationModal;