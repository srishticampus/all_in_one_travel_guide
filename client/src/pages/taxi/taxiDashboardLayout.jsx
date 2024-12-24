import Sidebar from "./sidebar/sidebar";

const TaxiDashboardLayout = ({ children }) => {
  return (
    <div className="tw-flex tw-h-screen tw-overflow-hidden">
      <div style={{width: '20%'}}>
        <Sidebar />
      </div>

      <main className="tw-bg-dashboardBlue tw-h-500 tw-w-9/12">
        <div className="tw-mx-auto tw-max-w-screen-2xl tw-p-4 ">{children}</div>
      </main>
    </div>
  );
};
export default TaxiDashboardLayout;
