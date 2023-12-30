import { getNext8Days } from "./DaysDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setDate,
  setSearch,
  fetchCoordinates,
  fetchClosestGarages,
  setPage,
} from "../../utils/slice/reservationSlice";

const MapSideBar = () => {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reservation.search) return alert("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return alert("Please select a date");

    await dispatch(fetchCoordinates(reservation.search));
    dispatch(fetchClosestGarages());
    dispatch(setPage("mapView"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%]"
    >
      <div className="flex flex-col justify-center pb-3 w-full">
        <label htmlFor="search">Book Parking Near</label>
        <input
          required
          className="input input-bordered w-full"
          placeholder="Address, Place, City or Venue"
          type="text"
          value={reservation.search}
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col pb-5 w-full">
        <label htmlFor="search">Date</label>
        <select
          required
          className="select select-bordered "
          value={reservation.date || ""}
          onChange={(e) => {
            dispatch(setDate(e.target.value.replace(/\//g, "-")));
          }}
        >
          {getNext8Days()}
        </select>
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
