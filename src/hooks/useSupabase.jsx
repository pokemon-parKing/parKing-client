import { createClient } from '@supabase/supabase-js';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUserData } from '../utils/slice/accountsSlice.js';
import { useEffect, useMemo } from 'react';

const Supabase = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = useMemo(() => createClient(supabaseUrl, supabaseAnonKey), [supabaseUrl, supabaseAnonKey]);

  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.provider_token) {
        window.localStorage.setItem('oauth_provider_token', session.provider_token)
      }

      if (session?.provider_refresh_token) {
        window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
      }

      if (session?.user) {
        dispatch(setAuthToken({auth_token: session}));
        const [first_name, last_name] = session.user.user_metadata.full_name.split(' ');
        dispatch(setUserData({
          id: session.user.id,
          first_name: first_name,
          last_name: last_name,
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
        dispatch(setAuthToken(null));
        dispatch(setUserData(null));
      }
    });
  }, [supabase.auth, dispatch])

  return supabase;
};

export default Supabase;
