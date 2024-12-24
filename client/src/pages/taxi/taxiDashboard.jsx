import { useState, useEffect } from "react";
import TaxiDashboardLayout from "./taxiDashboardLayout";
import Overview from "./overview/overview";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../Components/common/loadingSpinner/loadingSpinner";
import TaxiBookingRequests from "./viewReq/viewPendingReq.jsx";
import TaxiApprovedRequests from "./viewReq/viewApprovedReq.jsx";

const TaxiDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <TaxiDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "view-pending-request" && <TaxiBookingRequests />}
      {activePage === "view-approved-request" && <TaxiApprovedRequests />}

    </TaxiDashboardLayout>
  );
};

export default TaxiDashboard;
