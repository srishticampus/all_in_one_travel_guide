import { setActivePage } from "../../../../redux/hotel/activePageSlice";
import { useSelector, useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.hotelActivePage.activePage);

  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };

  return (
    <aside className="tw-h-screen tw-bg-blue-950 tw-w-60">
        
    </aside>
  );
};
export default Sidebar;
