import React from "react";
import TouristHeader from "../header/TouristHeader";
import TouristNavbar from "../navbar/TouristNavbar";
import Destination from "../destination/Destination";
import TourCategory from "../category/TourCategory";

export default function TouristHome() {
  return (
    <div>
      <TouristNavbar />
      <TouristHeader />
      <Destination />
      <TourCategory />
    </div>
  );
}
