import { useState } from "react";
import MapView from "./MapView";
import { getNext8Days } from "./DaysDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setDate,
  fetchCoordinates,
  fetchClosestGarages,
} from "../../utils/slice/reservationSlice";

const AddressForm = () => {
  const [address, setAddress] = useState(null);
  const { reservation, mapCenter, closestGarages } = useSelector(
    (state) => state.reservation
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address) return alert("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return alert("Please select a date");

    await dispatch(fetchCoordinates(address));
    dispatch(fetchClosestGarages());
  };

  return (
    <div className="flex flex-row w-full">
      <div
        className={
          !mapCenter
            ? "flex justify-center w-full"
            : "w-1/3 border-2 border-burgundy-p"
        }
      >
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="join flex justify-center w-full">
            <input
              required
              className="input input-bordered join-item w-full"
              placeholder="Address, Place, City or Venue"
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
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
                {!mapCenter ? "Search" : "Update Search"}
              </button>
            </div>
          </div>
        </form>
      </div>
      {mapCenter && closestGarages && <MapView />}
    </div>
  );
};

export default AddressForm;
