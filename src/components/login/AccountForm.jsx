const AccountForm = ({ formData, handleChange }) => {
  return (
    <div>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Melvin" required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Dieudonnée" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="melvin.dieudonnee@gmail.com" required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="(123) 456-7890" pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" required />
      </label>
    </div>
  );
};

export default AccountForm;