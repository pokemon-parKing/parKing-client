import { formatPhoneNumber } from "../../utils/formatPhoneNumber.js";
import PropTypes from 'prop-types';

const AccountForm = ({ formData, handleChange }) => {
  return (
    <div>
      <label htmlFor="firstName" className="font-semibold text-[#000]">
        FIRST NAME:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Melvin"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="lastName" className="font-semibold text-[#000]">
        LAST NAME:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Dieudonnée"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="email" className="font-semibold text-[#000]">
        EMAIL:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="melvin.dieudonnee@gmail.com"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
      <label htmlFor="phoneNumber" className="font-semibold text-[#000]">
        PHONE NUMBER:
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formatPhoneNumber(formData.phoneNumber)}
        onChange={handleChange}
        placeholder="(123) 456-7890"
        pattern="[0-9]*"
        className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
        required
      />
    </div>
  );
};

AccountForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AccountForm;
