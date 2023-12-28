import addReservation from "../../utils/addReservation";
const Confirmation = () => {
  const details = {
    garage_id: 1,
    date: "12-28-23",
    time: 5,
    name: "Twin Peaks",
    address: "501 Twin Peaks Blvd",
    city: "San Francisco",
    zip: "94131",
    state: "CA",
    username: "Bruce",
    user_id: "0db22c80-80d3-46ff-a684-abddd377bd05",
  };
  const handleReservation = () => {
    const body = {
      garage_id: details.garage_id,
      date: details.date,
      time: details.time,
      user_id: details.user_id,
    };
    addReservation(body);
  };

  return (
    <div>
      <h2 className="text-2xl">Reservation Details</h2>
      <h3>{details.username}</h3>
      <h3>{details.name}</h3>
      <h3>{`${details.address} ${details.city} ${details.state}, ${details.zip}`}</h3>
      <h3>{`${details.date} & ${details.time}`}</h3>
      <button onClick={handleReservation}>Confirm Reservation</button>
    </div>
  );
};

export default Confirmation;
