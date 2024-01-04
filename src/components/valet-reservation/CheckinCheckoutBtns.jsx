import { updateStatus } from "../../utils/valetReservationUtils.js";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const CheckinCheckoutBtns = ({ fetchData }) => {

  const { reservationDetails } = useSelector((state) => state.valet);
  const handleCheckIn = async (event) => {
    event.preventDefault();
    try {
      if (reservationDetails.status === 'reserved') {
        await updateStatus('checked-in', reservationDetails.id);
        await fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleCheckOut = async (event) => {
    event.preventDefault();
    try {
      if (reservationDetails.status === 'checked-in') {
        await updateStatus('picked-up', reservationDetails.id);
        await fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mt-8 flex justify-center">
      {reservationDetails.status === 'reserved'
      ?
        <button
          className="btn btn-lg btn-secondary bg-burgundy-p border-burgundy-s text-white mr-4"
          onClick={(event) => handleCheckIn(event)}
        >
          Check In
        </button>
      :
      reservationDetails.status === 'checked-in'
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