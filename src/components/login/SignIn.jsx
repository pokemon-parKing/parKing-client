import Supabase from '../../hooks/useSupabase';
import GoogleIcon from '../../assets/googleicon.png';

const SignIn = () => {
  const supabase = Supabase();
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
        } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch mt-10 px-3 xl:px-3 py-3 mx-auto min-h-[80vh] shadow-md">
      <div className="mx-auto w-fit lg:w-1/2 md:p-10 p-10 my-auto border-2 shadow-lg">
        <div className='flex flex-row items-center gap-2'>
          <img src={GoogleIcon} width='80px' height='80px' alt='google logo' />
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
            Join using your Google account
          </h1>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
        <button
          onClick={handleLogin}
          className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px]"
        >Sign in with Google</button>
      </div>
      </div>
    </div>
  );
};

export default SignIn;