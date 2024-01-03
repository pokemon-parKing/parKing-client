import Supabase from '../../hooks/useSupabase';

const SignIn = () => {
  const supabase = Supabase();
  //POST MVP refactor to use existing session if it already exists in the browser! save the user a click! and fast track them to their account page! might also make sense to check for session at the start and route the user accordingly!
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: 'http://localhost:5173/authcallback',
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