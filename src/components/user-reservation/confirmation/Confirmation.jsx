import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addReservation,
  resetState,
  setCarId,
  setUserId,
} from "../../../utils/slice/reservationSlice";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./ReservationDetails";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { reservation, selectedGarage } = useSelector(
    (state) => state.reservation
  );
  const { userData, vehicleData } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setUserId(userData.id));
    dispatch(setCarId(vehicleData[0].id));
  }, [dispatch, userData, vehicleData]);

  return (
    reservation && (
      <div className="flex flex-col items-center w-full mt-5">
        <AccountDetails />
        <ReservationDetails
          reservation={reservation}
          selectedGarage={selectedGarage}
        />
        <button
          className="btn"
          onClick={async () => {
            const response = await dispatch(addReservation());
            if (response.payload === 409) {
              toast.error(
                "Reservation already exists for selected car and time"
              );
            } else {
              toast.success("Reservation added successfully");
              dispatch(resetState());
            }
            navigate("/");
          }}
        >
          Confirm
        </button>
      </div>
    )
  );
};

export default Confirmation;
