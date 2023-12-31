import { useSelector } from "react-redux";

function GreetUser() {
  const { first_name, last_name } = useSelector(
    (state) => state.accounts.userData
  );
  const isLoggedIn = first_name && last_name;
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center">
      <h1 className="text-5xl">
        {isLoggedIn ? `Welcome ${first_name}!` : " "}
      </h1>
    </div>
  );
}

export default GreetUser;
