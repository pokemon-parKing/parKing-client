import { useMemo } from "react";
import PropTypes from "prop-types";
import TimeSlot from "./TimeSlot";
import { getAvailableTimes } from "../../lib/timeSlotUtil.js";

const TimeSlotList = ({ hoursOfOperation, total, list }) => {
  // console.log(hoursOfOperation, total, list);

  const hourRange = useMemo(() => {
    return hoursOfOperation.split("-").map((time) => {
      return parseInt(time);
    });
  }, [hoursOfOperation]);
  // console.log("1.", hourRange, list, total);
  const availableTimes = useMemo(() => {
    return getAvailableTimes(hourRange, list, total);
  }, [list, hourRange, total]);
  // console.log("AVAIL", availableTimes);

  return (
    <details className="dropdown max-w-[300px] w-48">
      <summary className="btn w-full">See Available Times</summary>
      <ul className="w-full dropdown-content menu shadow p-2 max-h-[500px] overflow-auto flex flex-row">
        {availableTimes.map((slot) => (
          <TimeSlot key={slot.time} info={slot} />
        ))}
      </ul>
    </details>
  );
};

TimeSlotList.propTypes = {
  hoursOfOperation: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  list: PropTypes.object.isRequired,
};

export default TimeSlotList;
