export const getAvailableTimes = (hourRange, list, total) => {
  let available = [];
  for (let i = hourRange[0]; i < hourRange[1]; i++) {
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
  if (number === 0) return "12:00 AM";
  if (number === 12) return "12:00 PM";
  let time = `${number % 12}:00`;

  if (number < 12) {
    return (time += " AM");
  } else {
    return (time += " PM");
  }
};

export const convertDBTime = (time) => {
  let dbTime = Number(time.split(":")[0]);
  if (time.slice(-2) === "PM") {
    dbTime += 12;
  }
  return dbTime;
};

export const convertDate = (dateString) => {
  const [month, day, year] = dateString.split("-");
  const date = new Date(`20${year}-${month}-${day}`);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = dayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();
  return `${dayName} ${monthName} ${dayOfMonth}`;
};
