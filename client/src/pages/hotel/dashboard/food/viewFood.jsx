import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { BASE_URL } from "../../../../apis/baseURL";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
import { toast } from "react-hot-toast";
import EditFoodModal from "./editFoodModal";

const ViewFood = ({ changeFoodId }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [editFoodItem, setEditFoodItem] = useState(null);
  const dispatch = useDispatch();

  const fetchFoodItems = async (id) => {
    try {
      const response = await axiosInstance.get(`food/get-food-by-hotel/${id}`);
      if (response.status === 200) {
        const data = response.data?.data?.reverse() || [];
        setFoodItems(data);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const handleUpdateFood = async (updatedFood) => {
    try {
      const formData = new FormData();
      formData.append('name', updatedFood.name);
      formData.append('description', updatedFood.description);
      formData.append('price', updatedFood.price);
      formData.append('foodType', updatedFood.foodType);
      formData.append('ingredients', updatedFood.ingredients);
      
      if (updatedFood.foodImgFile) {
        formData.append('foodImg', updatedFood.foodImgFile);
      }

      const response = await axiosInstance.patch(
        `/food/${updatedFood._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.status === 200) {
        toast.success("Food item updated successfully");
        fetchFoodItems(localStorage.getItem("travel_guide_hotel_id"));
        setEditFoodItem(null);
      }
    } catch (error) {
      toast.error("Failed to update food item");
      console.error("Error updating food item:", error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("travel_guide_hotel_id");
    if (id) {
      fetchFoodItems(id);
    }
  }, []);

  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };

  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center">
        Food Menu
      </h1>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {foodItems.map((food) => (
          <div
            key={food._id}
            className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-h-120 tw-relative"
          >
            {/* Edit button */}
            <button
              onClick={() => setEditFoodItem(food)}
              className="tw-absolute tw-top-2 tw-right-2 tw-bg-yellow-500 tw-text-white tw-p-2 tw-rounded-full hover:tw-bg-yellow-600"
              title="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="tw-h-5 tw-w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>

            <img
              src={
                food.foodImg
                  ? `${BASE_URL}/${food.foodImg}`
                  : "https://via.placeholder.com/150"
              }
              alt={food.name}
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-4">
              <h2 className="tw-text-xl tw-font-bold tw-text-center">
                {food.name}
              </h2>
              <p className="tw-text-gray-700 tw-mb-2">₹ {food.price}</p>
              <p className="tw-text-gray-600 tw-h-20">
                {food.description?.length > 100
                  ? `${food.description.substring(0, 100)}...`
                  : food.description}
              </p>
              <div className="tw-flex tw-justify-center">
                <button
                  className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded"
                  onClick={() => {
                    changeFoodId(food._id);
                    changePage("viewFoodDetails");
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Food Modal */}
      {editFoodItem && (
        <EditFoodModal
          foodItem={editFoodItem}
          onClose={() => setEditFoodItem(null)}
          onSave={handleUpdateFood}
        />
      )}
    </div>
  );
};

export default ViewFood;