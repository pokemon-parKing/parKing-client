import { useSelector, useDispatch } from "react-redux";
import {
  fetchCoordinates,
  fetchClosestGarages,
  setSearch,
} from "../../../../utils/slice/reservationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ClearSearchBtn from "./components/ClearSearchBtn";
import DateDropdown from "./components/DateDropdown";

const MapSideBar = () => {
  const { reservation, search } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return toast.error("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return toast.error("Please select a date");

    await dispatch(fetchCoordinates(search));
    dispatch(fetchClosestGarages());
    // navigate("/reservation/confirmation");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%]"
    >
      <div className="flex flex-col justify-center pb-5 w-full">
        <label htmlFor="search">Book Parking Near</label>
        <div className="flex flex-row items-center w-full mt-2 ml-[13px]">
          <div className="mr-[-32px] z-10">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            required
            className="input input-bordered w-full pl-10"
            type="text"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
          <ClearSearchBtn />
        </div>
      </div>
      <DateDropdown reservationDate={reservation.date} />
      <div className="indicator flex justify-center items-center w-full">
        <button type="submit" className="btn">
          Update Search
        </button>
      </div>
    </form>
  );
};

export default MapSideBar;
