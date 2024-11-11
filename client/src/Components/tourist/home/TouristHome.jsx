import React from "react";
import TouristHeader from "../header/TouristHeader";
import TouristNavbar from "../navbar/TouristNavbar";
import Destination from "../destination/Destination";

export default function TouristHome() {
  return (
    <div>
      <TouristNavbar />
      <TouristHeader />
      <Destination />
    </div>
  );
}
