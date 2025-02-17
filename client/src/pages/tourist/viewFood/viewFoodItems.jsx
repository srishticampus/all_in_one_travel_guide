import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import { useNavigate } from "react-router-dom";
const ViewFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  const [filterFoods, setFilterFoods] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const navigate = useNavigate();
  const fetchFoodItems = async () => {
    try {
      const response = await axiosInstance.get(`food/get-all-food`);
      if (response.status === 200) {
        const data = response.data?.data?.reverse() || [];
        setFoodItems(data);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const navigatePage = (id) => {
    navigate(`/tourist/view-foods/${id}`);
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    const myFilterFoods = foodItems.filter(
      (food) => food.price <= Number(value)
    );
    setFilterFoods(myFilterFoods);
  };

  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center">
        Food Menu
      </h1>

      <div className="tw-flex tw-items-center tw-justify-around tw-my-5 ">
        <input
          type="text"
          placeholder="Search foods.."
          className="tw-p-2 tw-rounded-lg tw-border-2 tw-border-gray-300 tw-w-80"
          onChange={(e) => {
            const value = e.target.value.toLowerCase();
            if (value) {
              const myFilteredFoods = foodItems.filter((food) =>
                food.name?.toLowerCase().includes(value)
              );
              setFilterFoods(myFilteredFoods);
            } else {
              setFilterFoods(foodItems);
            }
          }}
        />

        <div>
          <input
            type="range"
            className="tw-appearance-none tw-w-40 tw-h-2 tw-bg-gray-300 tw-rounded-lg tw-outline-none tw-transition"
            min={0}
            max={10000}
            step={100}
            onChange={handleFilter}
          />
          <span className="tw-ml-5 tw-font-semibold">
            {`Price Range: 0 - ${maxPrice}`}
          </span>
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {filterFoods.map((food) => (
          <div
            key={food.id}
            className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-h-120"
          >
            <img
              src={
                `${BASE_URL}/${food.foodImg}` ||
                "https://via.placeholder.com/150"
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
                  ? `${food.description?.substring(0, 100)}...`
                  : food.description}
              </p>
              <div className="tw-flex tw-justify-center">
                <button
                  className=" tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded"
                  onClick={() => {
                    navigatePage(food._id);
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFoodItems;
