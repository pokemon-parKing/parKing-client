import { useSelector, useDispatch } from "react-redux";
import {
  addReservation,
  resetState,
} from "../../../utils/slice/reservationSlice";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./ReservationDetails";
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    reservation && (
      <div className="flex flex-col items-center w-full mt-5">
        <AccountDetails />
        <ReservationDetails />
        <button
          className="btn"
          onClick={() => {
            dispatch(addReservation());
            dispatch(resetState());
            navigate('/reservation');
          }}
        >
          Confirm
        </button>
      </div>
    )
  );
};

export default Confirmation;
