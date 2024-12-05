import Sidebar from "./sidebar/sidebar";

const HotelDashboardLayout = ({ children }) => {
  return (
    <div className="tw-flex tw-h-screen tw-overflow-hidden">
      <Sidebar />

      <main className="tw-bg-dashboardBlue tw-h-500 tw-w-full">
        <div className="tw-mx-auto tw-max-w-screen-2xl tw-p-4 ">{children}</div>
      </main>
    </div>
  );
};
export default HotelDashboardLayout;
