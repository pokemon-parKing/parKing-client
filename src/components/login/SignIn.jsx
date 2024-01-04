import Supabase from '../../hooks/useSupabase';

const SignIn = () => {
  const supabase = Supabase();
  //POST MVP refactor to use existing session if it already exists in the browser! save the user a click! and fast track them to their account page! might also make sense to check for session at the start and route the user accordingly!
  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: 'http://localhost:5173/login/authcallback',
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
      <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5 mx-auto">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
            Join using your Google account
          </h1>
          <br />
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
          <button
            onClick={handleLogin}
            className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
          >Sign in with Google</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;