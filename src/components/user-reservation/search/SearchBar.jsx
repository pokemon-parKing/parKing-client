import { getNext8Days } from "../DaysDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setDate,
  fetchCoordinates,
  fetchClosestGarages,
  setPage,
  setSearch,
} from "../../../utils/slice/reservationSlice";

const SearchBar = () => {
  const { reservation, search } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return alert("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return alert("Please select a date");

    await dispatch(fetchCoordinates(search));
    dispatch(fetchClosestGarages());
    dispatch(setPage("mapView"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center w-[60%] ml-[25px]"
    >
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
      <div className="join flex justify-center w-full">
        <input
          required
          className="input input-bordered join-item pl-10 w-full"
          placeholder="Address, Place, City or Venue"
          type="text"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
        <select
          required
          className="select select-bordered join-item"
          value={reservation.date || ""}
          onChange={(e) => {
            dispatch(setDate(e.target.value.replace(/\//g, "-")));
          }}
        >
          <option value="" disabled>
            Date
          </option>
          {getNext8Days()}
        </select>
        <div className="indicator">
          <button type="submit" className="btn join-item">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
