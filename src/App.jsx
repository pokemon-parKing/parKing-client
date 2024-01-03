import { Link, useParams, Outlet } from "react-router-dom";

function App() {

  const { id: userId } = useParams();

  return (
    <>
      <div className="flex flex-col">
        <Link to='/'>parKing - Pokemon</Link>
        <Link to={"/reservation"}>User Reservation</Link>
        <Link to={`/user/${userId}`}>Go to User Page</Link>
        <Link to={"/valetReservation"}>Valet Reservation</Link>
        <Link to={"/login"}>Sign In or Sign Up</Link>
        <Outlet />
      </div>
    </>
  );
}

export default App;
