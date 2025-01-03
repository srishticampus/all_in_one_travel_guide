import React, { useState } from "react";
import DestinationCard from "./destinationCard";
import ViewDestinationModal from "./viewDestinationModal";
import DeleteConfirmModal from "./deleteConfirmModal";

const DestinationList = ({ destinations = [] }) => {
  const [viewDestination, setViewDestination] = useState(null);
  const [deleteDestination, setDeleteDestination] = useState(null);

  const handleDelete = (destination) => {
    // Handle the actual deletion here
    console.log("Deleting destination:", destination);
    setDeleteDestination(null);
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto">
        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-8">
          Tourist Destinations
        </h2>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onView={setViewDestination}
              onDelete={setDeleteDestination}
            />
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="tw-text-center tw-py-12">
            <p className="tw-text-gray-500 tw-text-lg">
              No destinations added yet.
            </p>
          </div>
        )}

        {viewDestination && (
          <ViewDestinationModal
            destination={viewDestination}
            onClose={() => setViewDestination(null)}
          />
        )}

        {deleteDestination && (
          <DeleteConfirmModal
            destination={deleteDestination}
            onConfirm={handleDelete}
            onCancel={() => setDeleteDestination(null)}
          />
        )}
      </div>
    </div>
  );
};

export default DestinationList;
