import { useSelector, useDispatch } from "react-redux";
import {
  addReservation,
  resetState,
} from "../../../utils/slice/reservationSlice";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./ReservationDetails";
const Confirmation = () => {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  return (
    reservation && (
      <div className="flex flex-col items-center w-full">
        <AccountDetails />
        <ReservationDetails />
        <button
          className="btn"
          onClick={() => {
            dispatch(addReservation());
            dispatch(resetState());
          }}
        >
          Confirm
        </button>
      </div>
    )
  );
};

export default Confirmation;
