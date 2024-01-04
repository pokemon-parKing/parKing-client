import { states } from '../../lib/states';

const GarageForm = ({ formData, handleChange }) => {

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#000]">
          Let's get to know your business
      </h1>
      <label htmlFor="garageAddress" className="font-semibold text-[#000]">
        ADDRESS:
      </label>
        <input
          type="text"
          id="garageAddress"
          name="garageAddress"
          value={formData.garageAddress}
          onChange={handleChange}
          placeholder="1337 Main St"
          className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
          required
        />
      <label htmlFor="garageCity" className="font-semibold text-[#000]">
        CITY:
      </label>
        <input
          type="text"
          id="garageCity"
          name="garageCity"
          value={formData.garageCity}
          onChange={handleChange}
          placeholder="San Junipero"
          className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
          required
        />
      <label htmlFor="garageState" className="font-semibold text-[#000]">
        STATE:
      </label>
      <br />
      <select
        name="garageState"
        value={formData.garageState}
        onChange={handleChange}
        className="select select-bordered select-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
        required
      >
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <br />
      <label htmlFor="garageZipCode" className="font-semibold text-[#000]">
        ZIP CODE:
      </label>
          <input
            type="text"
            id="garageZipCode"
            name="garageZipCode"
            value={formData.garageZipCode}
            onChange={handleChange}
            placeholder="54321"
            className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
            required
          />
      <label htmlFor="garageName" className="font-semibold text-[#000]">
        GARAGE NAME:
      </label>
        <input
          type="text"
          id="garageName"
          name="garageName"
          value={formData.garageName}
          onChange={handleChange}
          placeholder="King's Parking"
          className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
          required
        />
      <label htmlFor="garageOpeningHour" className="font-semibold text-[#000]">
        OPENING HOUR:
      </label>
      <br />
        <select
          name="garageOpeningHour"
          value={formData.garageOpeningHour}
          onChange={handleChange}
          className="select select-bordered select-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
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
        <br />
      <label htmlFor="garageClosingHour" className="font-semibold text-[#000]">
        CLOSING HOUR:
      </label>
      <br />
        <select
          name="garageClosingHour"
          value={formData.garageClosingHour}
          onChange={handleChange}
          className="select select-bordered select-primary border-black w-full max-w-xs text-black placeholder:text-black/70"
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
        <br />
      <label htmlFor="garageParkingSpots" className="font-semibold text-[#000]">
        PARKING SPOTS:
      </label>
        <input
          type="number"
          id="garageParkingSpots"
          name="garageParkingSpots"
          value={formData.parkingSpots}
          onChange={handleChange}
          placeholder="145"
          min={1}
          className="input input-bordered input-primary border-black w-full text-black placeholder:text-black/70"
          required
        />
    </div>
  );
};

export default GarageForm;