export const getAvailableTimes = (hourRange, list, total) => {
  // console.log("3.", hourRange, list, total);
  let available = [];
  /* SWAPPED HOUR RANGE 1 and 0  -- Q: WHY ARE HOURS BACKWARDS?*/
  for (let i = hourRange[1]; i <= hourRange[0]; i++) {
    // console.log(i);
    available.push({ time: i, spots: total });
  }
  available.forEach((slot) => {
    if (list[slot.time]) {
      slot.spots -= list[slot.time];
    }
    slot["available"] = slot.spots > 0;
    slot.time = convertTime(slot.time);
  });
  return available;
};

export const convertTime = (number) => {
  if (number === 24) return "12:00 AM";
  if (number === 12) return "12:00 PM";
  /*
1 - 1am
10 - 10am
12 - 12pm
15 - 3 pm
*/
  let time = `${number % 12}:00`;

  if (number < 12) {
    return (time += " AM");
  } else {
    return (time += " PM");
  }
};
