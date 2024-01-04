import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="bg-white">
      <Navbar/>
      <div className='min-h-[60vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
