const Overview = () => {
  // Static data (to be replaced with API data later)
  const dashboardData = {
    totalUsers: 1250,
    totalRooms: 100,
    availableRooms: 45,
    totalBookings: 75,
    totalRevenue: 125000,
    foodOrders: 180,
  };

  return (
    <div className="tw-p-6 tw-w-full">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">Taxi Dashboard</h1>
      
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
        {/* Users Card */}
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-border tw-border-gray-200">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-sm tw-text-gray-600">Total Users</p>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">{dashboardData.totalUsers}</h2>
            </div>
            <div className="tw-bg-blue-100 tw-p-3 tw-rounded-full">
              <svg className="tw-w-6 tw-h-6 tw-text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Rooms Card */}
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-border tw-border-gray-200">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-sm tw-text-gray-600">Total Rooms</p>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">{dashboardData.totalRooms}</h2>
              <p className="tw-text-sm tw-text-green-600">{dashboardData.availableRooms} Available</p>
            </div>
            <div className="tw-bg-green-100 tw-p-3 tw-rounded-full">
              <svg className="tw-w-6 tw-h-6 tw-text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bookings Card */}
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-border tw-border-gray-200">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-sm tw-text-gray-600">Total Bookings</p>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">{dashboardData.totalBookings}</h2>
            </div>
            <div className="tw-bg-purple-100 tw-p-3 tw-rounded-full">
              <svg className="tw-w-6 tw-h-6 tw-text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-border tw-border-gray-200">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-sm tw-text-gray-600">Total Revenue</p>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">${dashboardData.totalRevenue}</h2>
            </div>
            <div className="tw-bg-yellow-100 tw-p-3 tw-rounded-full">
              <svg className="tw-w-6 tw-h-6 tw-text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Food Orders Card */}
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-border tw-border-gray-200">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <p className="tw-text-sm tw-text-gray-600">Food Orders</p>
              <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">{dashboardData.foodOrders}</h2>
            </div>
            <div className="tw-bg-red-100 tw-p-3 tw-rounded-full">
              <svg className="tw-w-6 tw-h-6 tw-text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
