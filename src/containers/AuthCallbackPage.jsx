import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Supabase from "../hooks/useSupabase";
import { setUserData } from '../utils/slice/accountsSlice.js';
import { getUserInfo } from "../utils/loginUtils.js";

const AuthCallbackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const supabase = Supabase();
  const { id } = useSelector(state => state.accounts.userData);

  useEffect(() => {
    if (id) {
      getUserInfo(id)
        .then(({ data: user }) => {
          if (user) {
            const userInfo = {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              phone_number: user.phone_number,
              role: user.role,
              contact_preferences: user.contact_preferences,
            };
            dispatch(setUserData(userInfo));
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
            navigate('/');
          } else {
            navigate("/accountcreation");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [id, navigate, dispatch]);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default AuthCallbackPage;
