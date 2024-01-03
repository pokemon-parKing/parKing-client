import updateStatus from "../../utils/updateStatus";


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
          onClick={() => handleCheckIn(event)}
        >
          Check In
        </button>
      :
      reservation.status === 'checked-in'
      ?
        <button
          className="btn btn-lg btn-secondary bg-burgundy-p border-burgundy-s text-white"
          onClick={() => handleCheckOut(event)}
        >
          Check Out
        </button>
      :
      <span className="font-semibold">Checkout Sucessful</span>
      }

      </div>
  )
}

export default CheckinCheckoutBtns;