import Sidebar from "./sidebar/sidebar";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="tw-flex tw-h-screen tw-overflow-hidden">
      <div  style={{width: '20%'}}>
        <Sidebar />
      </div>

      <main className="tw-bg-dashboardBlue tw-h-500"  style={{width: '80%'}}>
        <div className="tw-mx-auto tw-max-w-screen-2xl tw-p-4 ">{children}</div>
      </main>
    </div>
  );
};
export default AdminDashboardLayout;
