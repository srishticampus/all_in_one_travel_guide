import { useState, useEffect } from "react";
import HotelDashboardLayout from "./hotelDashboardLayout";
import Overview from "./overview/overview";
import AddRoom from "./room/addRoom";
import { useSelector } from "react-redux";
import AddFood from "./food/addFood";
import { LoadingSpinner } from "../../../Components/common/loadingSpinner/loadingSpinner";
import ViewRoom from "./room/viewRoom";

const HotelDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <HotelDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "addRoom" && <AddRoom />}
      {activePage === "addFood" && <AddFood />}
      {activePage === "viewRoom" && <ViewRoom />}
    </HotelDashboardLayout>
  );
};

export default HotelDashboard;
