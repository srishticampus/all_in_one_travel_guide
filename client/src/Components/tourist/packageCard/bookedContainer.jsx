import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
import "./packageCard.scss";
import { useNavigate } from "react-router-dom";
import BookedPackageCard from "./bookedCard";
import { FilterBox } from "../../searchInput/filterBox";
import { SearchBox } from "../../searchInput/searchInput";
const BookedContainer = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [filteredPacks, setFilterdPacks] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [trigerRerender, setTrigerRerender] = useState(false);
  const trigger = () => {
    setTrigerRerender(!trigerRerender);
  };
  useEffect(() => {
    const activeTouristId =
      localStorage.getItem("travel_guide_tourist_id") || null;
    if (activeTouristId) {
      getPackages(activeTouristId);
    } else {
      navigate("/tourist/home");
    }
  }, [trigerRerender]);

  useEffect(() => {
    if (activeCategory) {
      const filtered = packages.filter((pack) => {
        return pack?.packageId?.packageType
          .toLowerCase()
          .includes(activeCategory.toLowerCase());
      });
      setFilterdPacks(filtered);
    } else {
      setFilterdPacks(packages);
    }
  }, [activeCategory]);

  useEffect(() => {
    console.log("packagesss => ", packages);
    const filtered = packages.filter((pack) => {
      return pack?.packageId?.packageName
        ?.toLowerCase()
        .includes(searchedItem?.toLowerCase());
    });
    setFilterdPacks(filtered);
  }, [searchedItem]);

  const getPackages = async (activeTouristId) => {
    try {
      const res = await axiosInstance.get(
        `/package-booking/tourist/${activeTouristId}`
      );
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setPackages(data);
        setFilterdPacks(data);
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };

  const changeCategory = (newCategory) => {
    setActiveCategory(newCategory);
  };
  const searchingItems = (value) => {
    setSearchedItem(value);
  };

  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-16">Booked Packages</h3>
      <div className="tw-flex tw-justify-between tw-w-10/12 tw-mx-auto">
        <SearchBox
          searchingItems={searchingItems}
          placeholder="Search Packages"
        />
        <FilterBox changeCategory={changeCategory} />
      </div>
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {filteredPacks.map((item) => {
          return (
            <BookedPackageCard
              key={item._id}
              item={item?.packageId}
              booking={item}
              trigger={trigger}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BookedContainer;
