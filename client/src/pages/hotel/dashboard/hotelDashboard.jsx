import {useState, useEffect } from "react";
import HotelDashboardLayout from "./hotelDashboardLayout";
import Overview from "./overview/overview";
import AddRoom from "./room/addRoom";
const HotelDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("overview");
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return isLoading ? (
    <div> todo add loading here..</div>
  ) : (
    <HotelDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "addRoom" && <AddRoom />}
    </HotelDashboardLayout>
  );
};

export default HotelDashboard;
