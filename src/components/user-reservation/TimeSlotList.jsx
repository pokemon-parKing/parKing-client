import { useMemo } from "react";
import PropTypes from "prop-types";
import TimeSlot from "./TimeSlot";

import { getAvailableTimes } from "../../lib/timeSlotUtil.js";

const TimeSlotList = ({
  hoursOfOperation,
  total,
  list,
  confirmReservation,
}) => {
  const hourRange = useMemo(() => {
    return hoursOfOperation.split("-").map((time) => {
      return parseInt(time);
    });
  }, [hoursOfOperation]);
  const availableTimes = useMemo(() => {
    return getAvailableTimes(hourRange, list, total);
  }, [list, hourRange, total]);

  return (
    <details className="dropdown max-w-[300px] w-48">
      <summary className="btn w-full">Select Time</summary>
      <ul className="w-full dropdown-content menu shadow p-2 max-h-[500px] overflow-auto flex flex-row">
        {availableTimes.map((slot) => (
          <TimeSlot
            key={slot.time}
            info={slot}
            confirmReservation={confirmReservation}
          />
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
