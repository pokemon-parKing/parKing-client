import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Supabase from "../hooks/useSupabase";
import { setUserData } from "../utils/slice/accountsSlice.js";
//import { getUserInfo } from "../utils/loginUtils.js";
const AuthCallbackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const supabase = Supabase();
  // const port = import.meta.env.VITE_ACCOUNT_SERVER_PORT
  const { id } = useSelector((state) => state.accounts.userData);
  useEffect(() => {
    console.log("id: ", id);
    if (id) {
      // getUserInfo(id)
      //   .then(({ data: user }) => {
      //     if (user) {
      //       console.log('user: ', user);
      //       dispatch(setUserData({
      //         first_name: user.first_name,
      //         last_name: user.last_name,
      //         email: user.email,
      //         phone_number: user.phone_number
      //       }));
      //       navigate('/');
      //     } else {
      //       navigate("/accountcreation");
      //     }
      //   })
      //   .catch((err) => console.error(err));
      axios
        .get(`http://localhost:3003/login/${id}`)
        .then(({ data }) => {
          console.log("data: ", data);
          if (data.length > 0) {
            //later OPTIMIZATION: Load that existing information into the store! might also make sense to alter the enpoint so that it returns a join table with either the cars or garages table so that data can be loaded into the store here too!
            //another OPTIMIZATION would be to save the account and cars/garages info into the session to gain the session persistance!
            dispatch(
              setUserData({
                first_name: data[0].first_name,
                last_name: data[0].last_name,
                email: data[0].email,
                phone_number: data[0].phone_number,
                role: data[0].role,
              })
            );
            navigate("/");
          } else {
            navigate("/accountcreation");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [id, navigate, dispatch]);
  return <div>Redirecting...</div>;
};
export default AuthCallbackPage;
//just leaving this as a reminder in how to access the local storage!
// const storedAuth = JSON.parse(window.localStorage.getItem('sb-iibwbjdisltiujjuglkp-auth-token'));
