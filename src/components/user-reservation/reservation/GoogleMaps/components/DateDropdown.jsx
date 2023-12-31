import { getNext8Days } from "./DaysDropdown";
import { useDispatch } from "react-redux";
import { setDate } from "../../../../../utils/slice/reservationSlice";
import PropTypes from "prop-types";

const DateDropdown = ({ reservationDate }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center pb-5 w-full">
      <label htmlFor="search">Date</label>
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
        </div>
        <select
          required
          className="select select-bordered w-full pl-10"
          defaultValue={reservationDate.replace(/-/g, "/") || ""}
          onChange={(e) => {
            dispatch(setDate(e.target.value.replace(/\//g, "-")));
          }}
        >
          {getNext8Days()}
        </select>
      </div>
    </div>
  );
};

DateDropdown.propTypes = {
  reservationDate: PropTypes.string,
};

export default DateDropdown;
