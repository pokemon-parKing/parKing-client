import { useParams, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./utils/slice/accountsSlice.js";
import axios from "axios";


function App() {
  const port = import.meta.env.VITE_ACCOUNT_SERVER_PORT
  const dispatch = useDispatch();
  const [session, setSession] = useState(null);
  const { id } = useSelector(state => state.accounts.userData);
  useEffect(() => {
    const currentSession = JSON.parse(window.localStorage.getItem('session'));
    setSession(currentSession);
    // console.log('currentSession: ', currentSession);
    if (session) {
      //console.log('session: ', session);
      dispatch(setUserData({
        id: session.user.id,
        first_name: session.user.user_metadata.full_name.split(' ')[0],
        last_name: session.user.user_metadata.full_name.split(' ')[1],
        email: session.user.email,
        auth_token: session
      }));
    };
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:${port}/login/${id}`)
        .then(({ data }) => {
          console.log('data: ', data);
          if (data.length > 0) {
            dispatch(setUserData({
              first_name: data[0].first_name,
              last_name: data[0].last_name,
              email: data[0].email,
              phone_number: data[0].phone_number
            }));
          }
        })
        .catch((err) => console.error(err));
    }
  }, [session, id])


  const { id: userId } = useParams();

  return (
    <div className="bg-white">
      <Navbar />
      <LandingPage />
      <Outlet />
    </div>
  );
}

export default App;
