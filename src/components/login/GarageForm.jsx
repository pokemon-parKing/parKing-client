const GarageForm = ({ formData, handleChange }) => {
  const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
  return (
    <div>
      <label>
        Address:
        <input type="text" name="garageAddress" value={formData.garageAddress} onChange={handleChange} placeholder="1337 Main St" required />
      </label>
      <label>
        City:
        <input type="text" name="garageCity" value={formData.garageCity} onChange={handleChange} placeholder="San Junipero" required />
      </label>
      <label>
        State:
        <select name="garageState" value={formData.garageState} onChange={handleChange} required>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </label>
      <label>
        Zip Code:
          <input type="text" name="garageZipCode" value={formData.garageZipCode} onChange={handleChange} placeholder="54321" required />
      </label>
      <label>
        Garage Name:
        <input type="text" name="garageName" value={formData.garageName} onChange={handleChange} placeholder="King's Parking" required />
      </label>
      <label>
        Opening Hour:
        <select
          name="garageOpeningHour"
          value={formData.garageOpeningHour}
          onChange={handleChange}
          required
        >
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => {
            const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
            const displayPeriod = hour >= 12 ? 'p.m.' : 'a.m.';
            return (
              <option key={hour} value={hour.toString().padStart(2, '0')}>
                {`${displayHour} ${displayPeriod}`}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Closing Hour:
        <select
          name="garageClosingHour"
          value={formData.garageClosingHour}
          onChange={handleChange}
          required
        >
          {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => {
            const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
            const displayPeriod = hour >= 12 ? 'p.m.' : 'a.m.';
            return (
              <option
                key={hour}
                value={hour.toString().padStart(2, '0')}
                disabled={hour <= Number(formData.garageOpeningHour)}
              >
                {`${displayHour} ${displayPeriod}`}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Parking Spots:
        <input type="number" name="garageParkingSpots" value={formData.parkingSpots} onChange={handleChange} placeholder="145" required />
      </label>
    </div>
  );
};

export default GarageForm;