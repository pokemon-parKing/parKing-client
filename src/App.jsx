import UserReservation from "./containers/UserReservation.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col">
      parKing - Pokemon
      <div className="flex flex-col md:flex-row ">Test</div>
      <Link to={"/pokemon"}>Pokemon</Link>
      <Link to={"/reservation"}>User Reservation</Link>
    </div>
  );
}

export default App;
