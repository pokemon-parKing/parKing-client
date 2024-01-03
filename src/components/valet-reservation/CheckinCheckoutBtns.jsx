import { updateStatus } from "../../utils/valetReservationUtils.js";
import PropTypes from 'prop-types';

const CheckinCheckoutBtns = ({ fetchData, reservation, reservation_id }) => {

  const handleCheckIn = async (event) => {
    event.preventDefault();
    try {
      if (reservation.status === 'reserved') {
        await updateStatus('checked-in', reservation_id);
        await fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleCheckOut = async (event) => {
    event.preventDefault();
    try {
      if (reservation.status === 'checked-in') {
        await updateStatus('picked-up', reservation_id);
        await fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mt-8 flex justify-center">
      {reservation.status === 'reserved'
      ?
        <button
          className="btn btn-lg btn-secondary bg-burgundy-p border-burgundy-s text-white mr-4"
          onClick={(event) => handleCheckIn(event)}
        >
          Check In
        </button>
      :
      reservation.status === 'checked-in'
      ?
        <button
          className="btn btn-lg btn-secondary bg-burgundy-p border-burgundy-s text-white"
          onClick={(event) => handleCheckOut(event)}
        >
          Check Out
        </button>
      :
      <span className="font-semibold">Checkout Successful</span>
      }

    </div>
  )
}

CheckinCheckoutBtns.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export default CheckinCheckoutBtns;