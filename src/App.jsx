import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "./utils/loginUtils.js";
import { setUserData, setAuthToken } from "./utils/slice/accountsSlice.js";


function App() {
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.accounts.userData);

  useEffect(() => {
    if (!id) {
      getSession()
      .then(({ data }) => {
        if (data) {
          dispatch(setUserData(data.userInfo));
          dispatch(setAuthToken(data.session));
        }
        //console.log('data: ', data);
      })
    }
  }, [dispatch]);

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
