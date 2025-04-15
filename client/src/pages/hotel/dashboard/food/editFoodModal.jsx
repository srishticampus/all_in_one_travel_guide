import React, { useState } from "react";
import Modal from "../../../admin/dashboard/addDestinations/ui/modal";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../../apis/baseURL";

const EditFoodModal = ({ foodItem, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    _id: foodItem._id,
    name: foodItem.name,
    description: foodItem.description,
    price: foodItem.price,
    foodType: foodItem.foodType,
    ingredients: foodItem.ingredients,
    foodImgFile: null
  });

  // Initialize previewImage with proper URL for existing images or null
  const [previewImage, setPreviewImage] = useState(
    foodItem.foodImg ? `${BASE_URL}/${foodItem.foodImg}` : null
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, foodImgFile: file });
      
      // Create preview URL for new image uploads
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation remains unchanged
    if (!formData.name || !formData.description || !formData.price) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (isNaN(formData.price)) {
      toast.error("Price must be a number");
      return;
    }

    onSave(formData);
  };

  return (
    <Modal onClose={onClose}>
      <div className="tw-p-6 tw-max-w-md tw-mx-auto">
        <h2 className="tw-text-xl tw-font-bold tw-mb-4">Edit Food Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Food Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              rows="3"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Price*
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Food Type*
            </label>
            <select
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              required
            >
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
            </select>
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Ingredients*
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              rows="3"
              required
            />
          </div>

          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
              Food Image
            </label>
            <div className="tw-flex tw-items-center tw-gap-4">
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Food Preview"
                  className="tw-w-20 tw-h-20 tw-object-cover tw-rounded"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="tw-text-sm"
              />
            </div>
            {!previewImage && (
              <p className="tw-text-sm tw-text-gray-500 tw-mt-1">
                No image currently set
              </p>
            )}
          </div>

          <div className="tw-flex tw-justify-end tw-gap-2">
            <button
              type="button"
              onClick={onClose}
              className="tw-px-4 tw-py-2 tw-bg-gray-300 tw-rounded hover:tw-bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditFoodModal;