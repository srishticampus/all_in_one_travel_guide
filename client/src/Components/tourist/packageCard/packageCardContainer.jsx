import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
const PackageCardContainer = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    try {
      const res = await axiosInstance.get("/package");
      if (res.status === 200) {
        setPackages(res.data?.data || []);
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };
  return (
    <div>
      <h1>All Packages </h1>
      <div className="tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {packages.map((item) => {
          return <PackageCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default PackageCardContainer;
