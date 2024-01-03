import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Link to="/">parKing - Pokemon</Link>
        <Link to={"/reservation"}>User Reservation</Link>
        <Link to={`/user`}>Go to User Page</Link>
        <Link to={"/valetReservation"}>Valet Reservation</Link>
        <Link to={"/login"}>Sign In or Sign Up</Link>
        <Outlet />
      </div>
    </>
  );
}

export default App;
