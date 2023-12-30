import { useMemo } from "react";
import TimeSlot from "./TimeSlot";
import { useSelector } from "react-redux";
import { getAvailableTimes } from "../../lib/timeSlotUtil.js";

const TimeSlotList = () => {
  const { reservationsList, selectedGarage } = useSelector(
    (state) => state.reservation
  );

  const hourRange = useMemo(() => {
    return selectedGarage.operation_hours.split("-").map((time) => {
      return parseInt(time);
    });
  }, [selectedGarage.operation_hours]);

  const availableTimes = useMemo(() => {
    return getAvailableTimes(hourRange, reservationsList, selectedGarage.spots);
  }, [reservationsList, hourRange, selectedGarage.spots]);

  return (
    <details className="dropdown max-w-[300px] w-48">
      <summary className="btn w-full">Select Time</summary>
      <ul className="w-full dropdown-content menu shadow p-2 max-h-[500px] overflow-auto flex flex-row">
        {availableTimes.map((slot) => (
          <TimeSlot key={slot.time} info={slot} />
        ))}
      </ul>
    </details>
  );
};

export default TimeSlotList;
