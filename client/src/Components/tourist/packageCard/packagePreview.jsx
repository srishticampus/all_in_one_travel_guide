import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
import "./packageCard.scss";
import React from "react";

export const PackagePreview = () => {
  const [filterdPacks, setFilterdPacks] = useState([]);

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    try {
      const res = await axiosInstance.get("/package");
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setFilterdPacks(data.slice(0,3));
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };

  return (
    <div className="pack-card-container tw-mt-5">
      {filterdPacks.length !== 0 && <h3 className="tw-text-center tw-mt-3"> Latest Packages </h3>}
      

      {filterdPacks.length === 0 && (
        <div className="tw-flex tw-h-96 tw-justify-center tw-items-center">
          {/* <h1 className="tw-text-2xl tw-font-bold">No packages found</h1> */}
          <img
            alt="coming-soon"
            src="https://cdni.iconscout.com/illustration/premium/thumb/coming-soon-illustration-download-in-svg-png-gif-file-formats--opening-digital-marketing-shop-board-people-activities-pack-illustrations-7973903.png?f=webp"
          />
        </div>
      )}
      <div className="tw-mx-auto tw-flex tw-w-full tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {filterdPacks.map((item) => {
          return <PackageCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};
