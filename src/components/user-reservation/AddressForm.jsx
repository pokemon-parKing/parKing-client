const AddressForm = () => {
  return (
    <form>
      <label htmlFor="street-address">
        Street Address <input type="text" />
      </label>
      <label htmlFor="apt">
        Apt/Unit # <input type="text" />
      </label>
      <label htmlFor="zip">
        Zip Code <input type="number" />
      </label>
      <label htmlFor="city">
        City <input type="text" />
      </label>
      <label htmlFor="state">
        State <input type="text" />
      </label>
      <label htmlFor="country">
        Country <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressForm;
