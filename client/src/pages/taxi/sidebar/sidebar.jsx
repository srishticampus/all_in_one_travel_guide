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
            {/* todo add pending svg here */}
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
            {/* todo add pending svg here */}
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
            Approved Requests
          </div>
        </li>
       
      </div>
    </aside>
  );
};
export default Sidebar;
