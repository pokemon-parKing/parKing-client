export const getNext8Days = () => {
  const dates = [];
  let currentDate = new Date();
  console.log(currentDate);
  for (let i = 0; i < 8; i++) {
    let dateString = currentDate.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
    dates.push(<option key={dateString}>{dateString}</option>);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};
