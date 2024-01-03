import { useParams, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <LandingPage />
      <Outlet />
    </div>
  );
}

export default App;
