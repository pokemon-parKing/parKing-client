import SearchBar from "./SearchBar";
import logo from "./parKing.png";

const Search = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img src={logo} className="pb-8" />
      <h1 className="text-3xl pb-11">Reserve Parking Now!</h1>
      <SearchBar />
    </div>
  );
};

export default Search;
