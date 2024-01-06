import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "./utils/loginUtils.js";
import { setUserData, setAuthToken } from "./utils/slice/accountsSlice.js";
import { fetchVehicleData, getValetDataApi } from "./utils/accountUtils.js";

function App() {
  const dispatch = useDispatch();
  const { id, role } = useSelector((state) => state.accounts.userData);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', 'dark');
  }, [])

  useEffect(() => {
    if (!id) {
      getSession().then(({ data }) => {
        if (data) {
          dispatch(setUserData(data.userInfo));
          dispatch(setAuthToken(data.session));
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (role === "admin") {
      getValetDataApi(id, dispatch);
    }
    if (role === "user") {
      fetchVehicleData(id, dispatch);
    }
  }, [role, id, dispatch]);

  return (
    <div className="">
      <Navbar />
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
