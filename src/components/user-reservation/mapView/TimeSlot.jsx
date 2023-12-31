import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setTime, setPage } from "../../../utils/slice/reservationSlice";
import { convertDBTime } from "../../../lib/timeSlotUtil";

const TimeSlot = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        info.available ? "cursor-pointer" : "pointer-events-none grayscale"
      } p-1 m-1 w-full border-2 border-transparent text-center`}
      onClick={() => {
        dispatch(setTime(convertDBTime(info.time)));
        dispatch(setPage("confirmation"));
      }}
    >
      {info.time}
      <div className="text-[.5em] text-slate-400 mt-1 mx-auto w-fit">
        Remaining Spots:
        <span className="text-xs ml-1 text-slate-600">{info.spots}</span>
      </div>
    </div>
  );
};

TimeSlot.propTypes = {
  info: PropTypes.object.isRequired,
};

export default TimeSlot;
