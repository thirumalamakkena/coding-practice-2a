const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newdate = addDays(new Date(2020, 07, 22), days);
  return `${newdate.getDay()}-${
    newdate.getMonth() + 1
  }-${newdate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
