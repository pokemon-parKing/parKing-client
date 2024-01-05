import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../utils/slice/reservationSlice";
import { convertDBTime } from "../../../lib/timeSlotUtil";
import { useNavigate } from "react-router-dom";

const TimeSlot = ({ info }) => {
  const role = useSelector((state) => state.accounts.userData.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        info.available ? "cursor-pointer" : "pointer-events-none grayscale"
      } p-4 mx-auto w-[90%] border-2 flex flex-row items-center border-transparent border-b-beige-s hover:invert`}
      onClick={() => {
        if (role !== "user") return;
        dispatch(setTime(convertDBTime(info.time)));
        navigate("/reservation/confirmation");
      }}
    >
      <div>{info.time}</div>
      <div className="text-[.5em] text-slate-400 ml-auto w-fit flex items-center">
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
