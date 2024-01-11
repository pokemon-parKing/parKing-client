import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import companyLogo from "../assets/parKing.png";
import Supabase from "../hooks/useSupabase";

function Navbar() {
  const supabase = Supabase();
  const role = useSelector((state) => state.accounts.userData.role);

  let navbarLinks = [
    {
      name: "Reservations",
      link: "/valet",
    },
    {
      name: "Account",
      link: "/user",
    },
    {
      name: "Sign In",
      link: "/login",
    },
  ];

  return (
    <nav className="bg-white-s">
        <div className="flex justify-between items-center mx-4 lg:mx-16 h-24 text-black ">
            <Link to="/">
                <img className="w-48 h-auto" src={companyLogo} alt='ParKing Logo' />
            </Link>
        <div className="flex gap-4">
          {navbarLinks.map((item) => {
            if (role !== "admin" && item.name === "Reservations") {
              return;
            } else if (role && item.name === "Sign In") {
                return (
                    <Link
                    key={"Sign Out"}
                    className="transition ease-in-out delay-150 text-lg hover:text-burgundy-s"
                    onClick={async () => {
                        await supabase.auth.signOut();
                        window.location.reload();
                    }}
                    >
                        {"Sign Out"}
                    </Link>
                )
            }
            return (
              <Link
                key={item.name}
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
