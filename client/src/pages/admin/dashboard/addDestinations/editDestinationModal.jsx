import React, { useState } from "react";
import Modal from "./ui/modal";
import { BASE_URL } from "../../../../apis/baseURL";
import axiosInstance from "../../../../apis/axiosInstance";
import { toast } from "react-hot-toast";
import Button from "./ui/Button";

const EditDestinationModal = ({ destination, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: destination.title,
    description: destination.description
  });
  
  const [previewImages, setPreviewImages] = useState({
    img1: `${BASE_URL}${destination.img1}`,
    img2: `${BASE_URL}${destination.img2}`
  });
  
  const [files, setFiles] = useState({ img1: null, img2: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles({ ...files, [e.target.name]: file });
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImages({ ...previewImages, [e.target.name]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      if (files.img1) formDataToSend.append('img1', files.img1);
      if (files.img2) formDataToSend.append('img2', files.img2);

      const res = await axiosInstance.patch(
        `/top-destinations/${destination._id}`,
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (res.status === 200) {
        toast.success("Destination updated successfully");
        onUpdate(res.data.data);
        onClose();
      }
    } catch (error) {
      toast.error("Failed to update destination");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={onClose} className="tw-max-w-2xl">
      <div className="tw-p-6">
        <h2 className="tw-text-xl tw-font-bold tw-mb-4">Edit Destination</h2>
        <form onSubmit={handleSubmit}>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-4">
            {['img1', 'img2'].map((img) => (
              <div key={img}>
                <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                  {img === 'img1' ? 'Primary Image' : 'Secondary Image'}
                </label>
                <div className="tw-flex tw-items-center tw-gap-2">
                  <img
                    src={previewImages[img]}
                    alt="Preview"
                    className="tw-w-20 tw-h-20 tw-object-cover tw-rounded"
                  />
                  <input
                    type="file"
                    name={img}
                    onChange={handleFileChange}
                    className="tw-text-sm"
                    accept="image/*"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              required
            />
          </div>
          
          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
              required
            />
          </div>
          
          <div className="tw-flex tw-justify-end tw-gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" isLoading={isLoading}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditDestinationModal;