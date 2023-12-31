import { supabase } from '../../utils/supabaseClient.js';

const SignIn = () => {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: 'http://localhost:4173/authcallback',
        },
      });
      if (error) throw error;
      // Handle successful sign in.
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <h4>This is the Sign In component</h4>
      <button onClick={handleLogin} >Sign In</button>
    </div>
  );
};

export default SignIn;