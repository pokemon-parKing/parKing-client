import { createClient } from '@supabase/supabase-js';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUserData } from '../utils/slice/accountsSlice.js';
import { useEffect, useMemo } from 'react';

const Supabase = () => {
  const supabaseUrl = 'https://iibwbjdisltiujjuglkp.supabase.co';
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY; // Set to null to protect credentials, dev to replace with anonymous key
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const supabase = useMemo(() => createClient(supabaseUrl, supabaseAnonKey), []);

  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      //console.log('supabase.auth.onAuthStateChange', event);
      //will optimize what is being stored in local storage later, it is currently useful to see the session information throughout the login process.
      if (session && session.provider_token) {
        window.localStorage.setItem('oauth_provider_token', session.provider_token)
      }

      if (session && session.provider_refresh_token) {
        window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
      }

      if (session && session.user) {
        dispatch(setAuthToken({auth_token: session}));
        //console.log('id: ', session.user.id);
        dispatch(setUserData({
          id: session.user.id,
          first_name: session.user.user_metadata.full_name.split(' ')[0],
          last_name: session.user.user_metadata.full_name.split(' ')[1],
          email: session.user.email,
          auth_token: session
        }));
        window.localStorage.setItem('oauth_user', JSON.stringify(session.user))
        window.localStorage.setItem('session', JSON.stringify(session))
      }

      if (event === 'SIGNED_OUT') {
        window.localStorage.removeItem('oauth_provider_token')
        window.localStorage.removeItem('oauth_provider_refresh_token')
        window.localStorage.removeItem('oauth_user')
        window.localStorage.removeItem('session')
        window.localStorage.removeItem('userInfo')
        window.localStorage.removeItem('cars')
        window.localStorage.removeItem('garages')
        window.localStorage.removeItem('sb-iibwbjdisltiujjuglkp-auth-token')
        dispatch(setAuthToken(null));
        dispatch(setUserData(null));
      }
    });
  }, [supabase.auth, dispatch])

  return supabase;
};

export default Supabase;
