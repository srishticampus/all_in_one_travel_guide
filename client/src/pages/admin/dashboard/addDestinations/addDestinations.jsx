import React from 'react';
import { useForm } from 'react-hook-form';
import { Upload, MapPin, AlertCircle } from 'lucide-react';

const AddDestinations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-max-w-3xl tw-mx-auto">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6 md:tw-p-8">
          <div className="tw-flex tw-items-center tw-space-x-2 tw-mb-6">
            <MapPin className="tw-w-6 tw-h-6 tw-text-blue-600" />
            <h1 className="tw-text-2xl tw-font-bold tw-text-gray-900">Add New Destination</h1>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
            <div>
              <label htmlFor="title" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                Destination Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-border tw-p-2"
              />
              {errors.title && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600 tw-flex tw-items-center">
                  <AlertCircle className="tw-w-4 tw-h-4 tw-mr-1" />
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                {...register("description", { required: "Description is required" })}
                className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-border tw-p-2"
              />
              {errors.description && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600 tw-flex tw-items-center">
                  <AlertCircle className="tw-w-4 tw-h-4 tw-mr-1" />
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                  Main Image
                </label>
                <div className="tw-mt-1 tw-flex tw-justify-center tw-px-6 tw-pt-5 tw-pb-6 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-md">
                  <div className="tw-space-y-1 tw-text-center">
                    <Upload className="tw-mx-auto tw-h-12 tw-w-12 tw-text-gray-400" />
                    <div className="tw-flex tw-text-sm tw-text-gray-600">
                      <label htmlFor="mainImage" className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-medium tw-text-blue-600 hover:tw-text-blue-500">
                        <span>Upload main image</span>
                        <input
                          id="mainImage"
                          type="file"
                          className="tw-sr-only"
                          accept="image/*"
                          {...register("mainImage", { required: "Main image is required" })}
                        />
                      </label>
                    </div>
                    <p className="tw-text-xs tw-text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {errors.mainImage && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600 tw-flex tw-items-center">
                    <AlertCircle className="tw-w-4 tw-h-4 tw-mr-1" />
                    {errors.mainImage.message}
                  </p>
                )}
              </div>

              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                  Thumbnail Image
                </label>
                <div className="tw-mt-1 tw-flex tw-justify-center tw-px-6 tw-pt-5 tw-pb-6 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-md">
                  <div className="tw-space-y-1 tw-text-center">
                    <Upload className="tw-mx-auto tw-h-12 tw-w-12 tw-text-gray-400" />
                    <div className="tw-flex tw-text-sm tw-text-gray-600">
                      <label htmlFor="thumbnailImage" className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-medium tw-text-blue-600 hover:tw-text-blue-500">
                        <span>Upload thumbnail</span>
                        <input
                          id="thumbnailImage"
                          type="file"
                          className="tw-sr-only"
                          accept="image/*"
                          {...register("thumbnailImage", { required: "Thumbnail image is required" })}
                        />
                      </label>
                    </div>
                    <p className="tw-text-xs tw-text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
                {errors.thumbnailImage && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600 tw-flex tw-items-center">
                    <AlertCircle className="tw-w-4 tw-h-4 tw-mr-1" />
                    {errors.thumbnailImage.message}
                  </p>
                )}
              </div>
            </div>

            <div className="tw-flex tw-justify-end">
              <button
                type="submit"
                className="tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-ring-offset-2 tw-transition-colors"
              >
                Add Destination
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDestinations;