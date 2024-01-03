import { useParams, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
function App() {

  const { id: userId } = useParams();

  return (
    <div className="bg-white">
      <Navbar/>
      {/* <LandingPage/> */}
      <Outlet />
    </div>
  );
}

export default App;
