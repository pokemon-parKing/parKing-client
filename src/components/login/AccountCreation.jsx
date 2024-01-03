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

  return (
    <div>
      {/* {conditionally render if role is null} */}
      {!role &&
        <>
          <div>
            Are you a driver or a valet?
          </div>
          <div>
            <label>
              <div>
                Driver:
                <input type="radio" name="role" value="driver" />
              </div>
            </label>
            <label>
              <div>Valet:
                <input type="radio" name="role" value="valet" />
              </div>
            </label>
            <label>
              <div>
              <button type="next" onClick={handleNextClick}>Next</button>
              </div>
            </label>
          </div>
        </>
      }
      {/* {Conditionally render if the role is not null} */}
      {role &&
        <div>
          <RegistrationForm role={role} />
          <label>
            <button type="back" onClick={() => { setRole(null) }}>Go Back</button>
          </label>
        </div>
      }
    </div>
  );
}

export default AccountCreation;
