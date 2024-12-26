import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../redux/hotel/activePageSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../../../utils/localStorage";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };

  const handleLogout = () => {
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <aside className="tw-h-screen tw-bg-violetShade tw-w-full tw-p-4">
      <div>
        <li className="tw-list-none tw-mt-5">
          <div
            onClick={() => changePage("overview")}
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline `}
          >
            <h3>Travel Guide</h3>
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("overview")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            Overview
          </div>
        </li>

        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-pending-request")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="6" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12" y2="16" />
            </svg>
            {/* todo add pending svg here */}
            Pending Requests
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-approved-request")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Approved Requests
          </div>
        </li>
        <li className="tw-list-none tw-mt-5" onClick={handleLogout}>
          <div
            className={` tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2H10V4H6V2ZM6 14H10V16H6V14ZM10 9L7 6V8H0V10H7V12L10 9ZM14 1H12C11.4477 1 11 1.44772 11 2V4C11 4.55228 11.4477 5 12 5H14V13H12C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17H14C15.1046 17 16 16.1046 16 15V3C16 1.89543 15.1046 1 14 1Z"
                fill="#FF0000"
              />
            </svg>
            <span className="tw-text-red-700">Logout</span>
          </div>
        </li>
      </div>
    </aside>
  );
};
export default Sidebar;
