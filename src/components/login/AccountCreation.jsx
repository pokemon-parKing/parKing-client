import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function AccountCreation() {
  const [role, setRole] = useState(null);
  //this is where the user will get routed after their account is created with supabase google Oauth.

  //this should be used to set the state in order to move the user to the next page (ie conditionally render out the next section of the form)
  const handleNextClick = () => {
    //depending on the radio button value that is selected (driver or valet) the state will be set to match that value
    //console.log('user will be: ', document.querySelector('input[name="role"]:checked').value);
    if (!document.querySelector('input[name="role"]:checked')) {
      alert('Please select a role!');
    } else {
      setRole(document.querySelector('input[name="role"]:checked').value);
    }
  }

  const handleBackClick = () => {
    setRole(null);
  }

  return (
    <>
      {/* {conditionally render if role is null} */}
      {!role &&
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5 mx-auto my-10">
          <div className="mx-auto w-full lg:w-1/2 md:px-10 p-10">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
              Are you a driver or a valet?
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-10 h-[200px] overflow-y-auto">
                <div className="flex flex-row gap-10 justify-center items-center">
                  <label htmlFor="driver" className="font-semibold text-[#000] flex gap-2 items-center">
                    DRIVER:
                    <input
                      type="radio"
                      id="driver"
                      name="role"
                      value="driver"
                      className="radio"
                    />
                   </label>
                  <label htmlFor="valet" className="font-semibold text-[#000] flex gap-2 items-center">
                    VALET:
                    <input
                      type="radio"
                      id="valet"
                      name="role"
                      value="valet"
                      className="radio"
                    />
                  </label>
                </div>

                <button
                  type="next"
                  className="btn btn-active bg-black border-black text-white btn-primary btn-block max-w-[200px] mx-auto"
                  onClick={handleNextClick}>Next
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      {/* {Conditionally render if the role is not null} */}
      {role &&
        <div>
          <RegistrationForm role={role} handleBackClick={handleBackClick} />
        </div>
      }
    </>
  );
}

export default AccountCreation;
