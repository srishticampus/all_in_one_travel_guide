import { useState, useEffect } from "react";
import AdminDashboardLayout from "./adminDashboardLayout";
import Overview from "./overview/overview";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../../Components/common/loadingSpinner/loadingSpinner";
import ViewAllUsers from "./viewAllUsers/viewAllUsers";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <AdminDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "view-all-users" && <ViewAllUsers />}

    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
