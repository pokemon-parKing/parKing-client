import React from "react";
import AccountsPage from "./containers/AccountsPage.jsx";
import UserReservation from "./containers/UserReservation.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Link to={'/pokemon'}>Pokemon</Link> */}
      <Link to="/user">Go to User Page</Link>
      parKing - Pokemon
      <div className="flex flex-col md:flex-row ">Test</div>
      <UserReservation />
    </>
  );
}

export default App;
