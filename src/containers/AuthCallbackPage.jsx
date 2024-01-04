import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Supabase from "../hooks/useSupabase";
import { setUserData } from '../utils/slice/accountsSlice.js';

const AuthCallbackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const supabase = Supabase();

  const { id, auth_token } = useSelector((state) => state.accounts.userData);

  useEffect(() => {
    console.log("id: ", id);
    if (id) {
      axios.get(`http://localhost:3002/login/${id}`)
        .then(({ data }) => {
          console.log("data: ", data);
          dispatch(setUserData(data[0]));
          if (data.length > 0) {
            //later OPTIMIZATION: Load that existing information into the store! might also make sense to alter the enpoint so that it returns a join table with either the cars or garages table so that data can be loaded into the store here too!
            navigate("/");
          } else {
            navigate("/accountcreation");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [id, navigate, dispatch]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default AuthCallbackPage;

//just leaving this as a reminder in how to access the local storage!
// const storedAuth = JSON.parse(window.localStorage.getItem('sb-iibwbjdisltiujjuglkp-auth-token'));
