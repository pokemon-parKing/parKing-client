import { Link, useParams } from "react-router-dom";
// we import from redux usedisptach and useselector to access our store
import { useDispatch, useSelector } from "react-redux";
// import any methods/functions for the state you need
import { addToArray } from "./utils/slice/example.js";
import LandingPage from "./components/Landingpage/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  // we initialize dispatch as our function to fire our state method/function
  const dispatch = useDispatch();
  // we use useSelector to grab the state we need from the store
  // state refers to the global store/state followed by the name of the specific slice, then state
  const array = useSelector((state) => state.example.array);

  // *** if all you need in this file is to set state, you dont need selector.
  // below is how to dispatch the specific method/function when using it in the file.
  const add = (value) => {
    dispatch(addToArray(value));
  };

  const { id: userId } = useParams();

  return (
    <>
      
      <Navbar />
      <LandingPage/>
    </>
  );
}

export default App;
