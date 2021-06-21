const DateFormat = (date) => {
  return `${new Date(date).getMonth()} / ${new Date(
    date
  ).getUTCDate()} / ${new Date(date).getFullYear()}`;
};

export default DateFormat;