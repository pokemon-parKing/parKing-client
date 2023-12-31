import { useMemo } from "react";
import TimeSlot from "./TimeSlot";
import { useSelector } from "react-redux";
import {
  getAvailableTimes,
  convertDBTime,
  getFormattedDate,
  getCurrentHour,
} from "../../../lib/timeSlotUtil.js";

const TimeSlotList = () => {
  const today = getFormattedDate();
  const currentHour = getCurrentHour();
  const { reservation, reservationsList, selectedGarage } = useSelector(
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
    <details className="dropdown max-w-[800px] w-[90%] mx-auto h-[81%]">
      <summary className="btn w-full">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Select Time
      </summary>
      <ul className="w-full dropdown-content menu shadow p-2 h-full overflow-auto flex flex-row">
        {availableTimes.map((slot) => {
          if (
            currentHour > convertDBTime(slot.time) &&
            reservation.date === today
          ) {
            return null;
          }
          return <TimeSlot key={slot.time} info={slot} />;
        })}
      </ul>
    </details>
  );
};

export default TimeSlotList;
