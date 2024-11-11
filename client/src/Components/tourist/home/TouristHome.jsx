import React from "react";
import TouristHeader from "../header/TouristHeader";
import TouristNavbar from "../navbar/TouristNavbar";
import Destination from "../destination/Destination";
import TourCategory from "../category/TourCategory";
import Footer from "../../Footer";

export default function TouristHome() {
  return (
    <div>
      <TouristNavbar />
      <TouristHeader />
      <Destination />
      <TourCategory />
      <Footer />
    </div>
  );
}
