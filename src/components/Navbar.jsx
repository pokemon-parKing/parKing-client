import React from "react";
import { Link } from "react-router-dom";
//global state if user is logged in, and if user is valet / driver

function Navbar() {
  let navbarLinks = [
    {
      name: "User Reservation",
      link: "/reservation",
    },
    {
      name: "User Page",
      link: "/user",
    },
    {
      name: "Valet Reservation",
      link: "/valetReservation",
    },
    {
      name: "Sign In/Sign Up",
      link: "/login",
    },
  ];
  return (
    <nav className="bg-white-s">
      <div className="flex justify-between items-center mx-24 h-24 text-black ">
        <Link to="/pokemon">
          <img
            className="w-48 h-auto"
            src="src/assets/parKing.png"
            alt="ParKING Logo"
          />
        </Link>

        <div className="flex gap-4">
          {navbarLinks.map((item, index) => {
            return (
              <Link
                className="transition ease-in-out delay-150 text-lg hover:text-burgundy-s"
                to={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
