export const getAvailableTimes = (hourRange, list, total) => {
  let available = [];
  for (let i = hourRange[0]; i < hourRange[1]; i++) {
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
  if (time === "12:00 PM") return 12;

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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = dayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const daySuffix = getDaySuffix(dayOfMonth);
  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}${daySuffix}`;

  return formattedDate;
};

export const getFormattedDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);
  return `${month}-${day}-${year}`;
};
export const getCurrentHour = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  return currentHour;
};
