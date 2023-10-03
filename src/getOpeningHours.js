const { hours } = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayError = 'The day must be valid. Example: Monday';

const isStringRepresentNumber = (string, what) => {
  const num = Number(string);
  if (!isNaN(num) && Number.isInteger(num)) {
    return true;
  }
  throw new Error(`The ${what} should represent a valid integer number`);
};

const validateHour = (hour) => {
  if (hour) {
    const [number] = hour.toUpperCase().split('-');
    const [dataHours, dataMinutes] = number.split(':');
    isStringRepresentNumber(dataHours, 'hour');
    isStringRepresentNumber(dataMinutes, 'minutes');
  }
};

const validateDay = (day) => {
  if (!weekDays.includes(day)) {
    throw new Error(dayError);
  }
};

const empty = (one, two) => !one && !two;

// const fix12 = (hour, open, close) => ({
//   h: (hour === 12) ? 0 : hour,
//   o: (open === 12) ? 0 : open,
//   c: (close === 12) ? 0 : close,
// });

// const openOrClosed = (period, hour, open, close) => {
//   const { o, c, h } = fix12(hour, open, close);
//   return (period === 'AM' && h >= o) || (period === 'PM' && h < c);
// };

const getOpeningHours = (day, dataHour) => {
  if (empty(day, dataHour)) return 'The zoo is closed';
  const adjustedDay = `${day[0].toUpperCase()}${day.slice(1).toLowerCase()}`;
  validateDay(adjustedDay);
  validateHour(dataHour);
  const { open, close } = hours[adjustedDay];
  if (empty(close, open)) return 'The zoo is closed';

  const [hour, minutes] = dataHour.split(':').map(Number);
  const [openHour, openMinutes] = open.split(':').map(Number);
  const [closeHour, closeMinutes] = close.split(':').map(Number);

  if (
    (hour > openHour || (hour === openHour && minutes >= openMinutes))
    && (hour < closeHour || (hour === closeHour && minutes < closeMinutes))
  ) {
    return 'The zoo is open';
  }
  return 'The zoo is closed';
};
module.exports = getOpeningHours;
