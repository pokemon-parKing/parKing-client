import { useSelector, useDispatch } from "react-redux";
import { getNext8Days } from "../DaysDropdown";
import {
  setDate,
  setSearch,
  fetchCoordinates,
  fetchClosestGarages,
  setPage,
} from "../../../utils/slice/reservationSlice";

const MapSideBar = () => {
  const { reservation, search } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return alert("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return alert("Please select a date");

    await dispatch(fetchCoordinates(search));
    dispatch(fetchClosestGarages());
    dispatch(setPage("reservation"));
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
              xmlns="http://www.w3.org/2000/svg"
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
          <button
            className="ml-[-35px] z-10"
            onClick={() => dispatch(setSearch(""))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center pb-5 w-full">
        <label htmlFor="search">Date</label>
        <div className="flex flex-row items-center w-full mt-2 ml-[13px]">
          <div className="mr-[-32px] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <select
            required
            className="select select-bordered w-full pl-10"
            value={reservation.date.replace(/-/g, "/") || ""}
            onChange={(e) => {
              dispatch(setDate(e.target.value.replace(/\//g, "-")));
            }}
          >
            {getNext8Days()}
          </select>
        </div>
      </div>
      <div className="indicator flex justify-center items-center w-full">
        <button type="submit" className="btn">
          Update Search
        </button>
      </div>
    </form>
  );
};

export default MapSideBar;

