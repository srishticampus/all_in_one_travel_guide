import { useState, useEffect } from "react";
import HotelDashboardLayout from "./hotelDashboardLayout";
import Overview from "./overview/overview";
import AddRoom from "./room/addRoom";
import { useSelector } from "react-redux";
import AddFood from "./food/addFood";
import { LoadingSpinner } from "../../../Components/common/loadingSpinner/loadingSpinner";
import ViewRoom from "./room/viewRoom";
import ViewFood from "./food/viewFood";

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
      {activePage === "addFood" && <AddFood />}
      {activePage === "viewFood" && <ViewFood />}
      {activePage === "addRoom" && <AddRoom />}
      {activePage === "viewRoom" && <ViewRoom />}
    </HotelDashboardLayout>
  );
};

export default HotelDashboard;
