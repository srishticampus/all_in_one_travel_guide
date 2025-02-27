import PackageCard from "./packageCard";
import "./packageCard.scss";
import React from "react";
export const DestinationPackageCardContainer = ({ filterdPacks }) => {
  return (
    <div className="pack-card-container">
      {filterdPacks.length > 0 && (
        <h3 className="tw-text-center tw-mt-3">
          Packages for this destination{" "}
        </h3>
      )}

      {filterdPacks.length === 0 && (
        <div className="tw-flex tw-h-96 tw-justify-center tw-items-center">
          <h1 className="tw-text-2xl tw-font-bold">No packages found</h1>
        </div>
      )}
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {filterdPacks.map((item) => {
          return <PackageCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};
