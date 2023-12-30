import { getNext8Days } from "./DaysDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setDate,
  fetchCoordinates,
  fetchClosestGarages,
  setPage,
  setSearch,
} from "../../utils/slice/reservationSlice";

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
    <form onSubmit={handleSubmit} className="w-3/4">
      <div className="join flex justify-center w-full">
        <input
          required
          className="input input-bordered join-item w-full"
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
