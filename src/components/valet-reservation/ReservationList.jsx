
const ReservationList = () => {
  // const { reservations } = useReservationContext();
  return (
    <div>
      <h4>This is the ReservationList component</h4>
      {/* <ul>
        {reservations.map((reservation) => {
          return (
            <li key={reservation.id}>
            //Need this to be a link to the reservation details page
              {reservation.date} {reservation.time}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default ReservationList;