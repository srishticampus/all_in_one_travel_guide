import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../../apis/axiosInstance";

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(`/tourist/getAllTourist`);
      setUsers(response.data.data);
      setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeactivate = async (userId) => {
    try {
      await axios.patch(`/api/users/${userId}/deactivate`);
      fetchUsers();
    } catch (error) {
      console.error("Error deactivating user:", error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="tw-p-6">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-6">View All Users</h1>

      {/* Table */}
      <div className="tw-overflow-x-auto tw-bg-white tw-rounded-lg tw-shadow">
        <table className="tw-min-w-full tw-divide-y tw-divide-gray-200">
          <thead className="tw-bg-gray-50">
            <tr>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Name
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Email
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Phone
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                ID Type
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Gender
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Country
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="tw-bg-white tw-divide-y tw-divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.name}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.email}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.phoneNumber}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.idType}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.gender}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.country}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  <button
                    onClick={() => openModal(user)}
                    className="tw-bg-blue-500 tw-text-white tw-px-3 tw-py-1 tw-rounded tw-mr-2 hover:tw-bg-blue-600"
                  >
                    View ID
                  </button>
                  <button
                    onClick={() => handleDeactivate(user._id)}
                    className="tw-bg-red-500 tw-text-white tw-px-3 tw-py-1 tw-rounded hover:tw-bg-red-600"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="tw-flex tw-justify-center tw-mt-4 tw-gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`tw-px-3 tw-py-1 tw-rounded ${
              currentPage === page
                ? "tw-bg-blue-500 tw-text-white"
                : "tw-bg-gray-200 tw-text-gray-700 hover:tw-bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
          <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-max-w-lg tw-w-full">
            <div className="tw-flex tw-justify-between tw-mb-4">
              <h2 className="tw-text-xl tw-font-bold">User ID Document</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-gray-500 hover:tw-text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="tw-aspect-w-16 tw-aspect-h-9">
              {selectedUser?.touristPhoto ? (
                <img
                  src={selectedUser.touristPhoto}
                  alt="User ID"
                  className="tw-object-contain tw-w-full"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/400x300?text=ID+Document"
                  alt="Placeholder ID"
                  className="tw-object-contain tw-w-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllUsers;
