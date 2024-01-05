import { getNext8Days } from "../reservation/GoogleMaps/components/DaysDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  setDate,
  fetchCoordinates,
  fetchClosestGarages,
  setSearch,
} from "../../../utils/slice/reservationSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SearchBar = () => {
  const { reservation, search } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search) return toast.error("Please fill address");
    if (!reservation.date || reservation.date === "Select a date")
      return toast.error("Please select a date");

    const response = await dispatch(fetchCoordinates(search));
    if (response.payload === 500)
      return toast.error("No matches, please try again");
    dispatch(fetchClosestGarages());
    navigate("/reservation");
  };

  return (
    <div className="flex flex-col absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-40 ">
      <h1 className="text-3xl text-center text-black-p">
        Reserve Parking Now!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center w-[700px] mx-auto my-2"
      >
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
        <div className="join flex justify-center w-full">
          <input
            required
            className="input input-bordered join-item pl-10 w-full"
            placeholder="Address, Place, City or Venue"
            defaultValue=""
            type="text"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
          <select
            required
            className="select select-bordered join-item"
            value={reservation.date ? reservation.date.replace(/-/g, "/") : ""}
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
    </div>
  );
};

export default SearchBar;
