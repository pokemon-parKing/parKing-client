import { useSelector, useDispatch } from "react-redux";
import { getNext8Days } from "./DaysDropdown";

import {
  setDate,
  setSearch,
  fetchCoordinates,
  fetchClosestGarages,
  setPage,
} from "../../utils/slice/reservationSlice";

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
    dispatch(setPage("mapView"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%]"
    >
      <div className="flex flex-col justify-center pb-5 w-full">
        <label htmlFor="search">Book Parking Near</label>
        <input
          required
          className="input input-bordered mt-2 w-full"
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col pb-5 w-full">
        <label htmlFor="search">Date</label>
        <select
          required
          className="select select-bordered mt-2"
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
