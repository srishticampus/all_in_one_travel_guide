import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../../../../utils/localStorage";
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
    <aside className="tw-h-screen tw-bg-blueShade tw-w-72 tw-p-4">
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
          onClick={() => changePage("view-all-users")}
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Tourists
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-agencies")}
        >
          <div
            className={` tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
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
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
            Agencies
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-hotels")}
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
              <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
              <path d="M6 21V12h12v9" />
              <path d="M9 21v-3h6v3" />
              <path d="M9 6h6" />
            </svg>
            Hotels
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-rooms")}
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
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Rooms
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("add-destinations")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="5"
                width="16"
                height="8"
                rx="2"
                ry="2"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
              <line
                x1="1"
                y1="9"
                x2="17"
                y2="9"
                stroke="white"
                stroke-width="2"
              />
              <circle cx="4" cy="9" r="1" fill="white" />
              <circle cx="14" cy="9" r="1" fill="white" />
              <line
                x1="6"
                y1="7"
                x2="12"
                y2="7"
                stroke="white"
                stroke-width="1.5"
              />
              <line
                x1="6"
                y1="11"
                x2="12"
                y2="11"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            Add Destinations
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-destinations")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="5"
                width="16"
                height="8"
                rx="2"
                ry="2"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
              <line
                x1="1"
                y1="9"
                x2="17"
                y2="9"
                stroke="white"
                stroke-width="2"
              />
              <circle cx="4" cy="9" r="1" fill="white" />
              <circle cx="14" cy="9" r="1" fill="white" />
              <line
                x1="6"
                y1="7"
                x2="12"
                y2="7"
                stroke="white"
                stroke-width="1.5"
              />
              <line
                x1="6"
                y1="11"
                x2="12"
                y2="11"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            View Destinations
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
