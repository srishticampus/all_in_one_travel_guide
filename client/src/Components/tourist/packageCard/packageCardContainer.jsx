import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
import "./packageCard.scss";
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
 if (packages.length === 0) {
  return (
    <div className="tw-flex tw-h-96 tw-justify-center tw-items-center">
      <h1 className="tw-text-2xl tw-font-bold">No packages found</h1>
    </div>
  )
 }

  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-3">Packages for you </h3>
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {packages.map((item) => {
          return <PackageCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default PackageCardContainer;
