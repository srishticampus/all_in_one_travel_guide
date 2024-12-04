import { useState, useEffect } from "react";
import HotelDashboardLayout from "./hotelDashboardLayout";
import Overview from "./overview/overview";
import AddRoom from "./room/addRoom";
import { useSelector } from "react-redux";
import AddFood from "./food/addFood";

const HotelDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <HotelDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "addRoom" && <AddRoom />}
      {activePage === "addFood" && <AddFood />}
    </HotelDashboardLayout>
  );
};

export default HotelDashboard;
