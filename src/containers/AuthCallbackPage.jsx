import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient.js';

const AuthCallbackPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const authToken = params.get('access_token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Exchange the token for user data
        const { user, session, error } = await supabase.auth.api.getUser(authToken);
        if (error) {
          console.error('Error fetching user data:', error);
          // Handle error
        } else {
          console.log('User data:', user);
          console.log('Session data:', session);
          // Use the user data in your application
          const userId = user.id; // This is the user's Supabase database ID
          console.log('User ID:', userId);
        }
      } catch (error) {
        console.error('Error exchanging token for user data:', error);
        // Handle error
      }
    };
    if (authToken) {
      fetchUserData();
    }
  }, [authToken]);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
};

export default AuthCallbackPage;


