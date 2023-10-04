const { hours } = require('../data/zoo_data');

const ERROR_INVALID_TIME_FORMAT = 'Invalid time format';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const parseTime = (time) => {
  if (typeof time !== 'string' || !time.match(/^\d{1,2}:\d{2} [APap][Mm]$/)) {
    throw new Error(ERROR_INVALID_TIME_FORMAT);
  }

  const [hourStr, minuteAndPeriod] = time.split(':');
  const [minute, period] = minuteAndPeriod.split(' ');

  const hour = parseInt(hourStr, 10);

  if (isNaN(hour) || isNaN(parseInt(minute, 10)) || hour < 0 || hour > 12 || parseInt(minute, 10) < 0 || parseInt(minute, 10) > 59) {
    throw new Error(ERROR_INVALID_TIME_FORMAT);
  }

  return { hour, minute: parseInt(minute, 10), period };
};

const isWithinTimeRange = (current, start, end, period) => {
  if ((period === 'AM' && (current.hour < start.hour || (current.hour === start.hour && current.minute < start.minute)))
      || (period === 'PM' && (current.hour > end.hour || (current.hour === end.hour && current.minute >= end.minute)))) {
    return false;
  }

  return true;
};

const validateDay = (day) => {
  const adjustedDay = day[0].toUpperCase() + day.slice(1).toLowerCase();
  if (!weekDays.includes(adjustedDay)) {
    throw new Error('The day must be valid. Example: Monday');
  }
};

const getOpeningHours = (day, dataHour) => {
  if (!day || !dataHour) return 'The zoo is closed';

  validateDay(day);

  if (dataHour === 'The zoo is closed') {
    return 'The zoo is closed';
  }

  const adjustedDay = day[0].toUpperCase() + day.slice(1).toLowerCase();
  const [time, period] = dataHour.split(' ');

  const { hour: openHour, minute: openMinute } = parseTime(hours[adjustedDay].open);
  const { hour: closeHour, minute: closeMinute } = parseTime(hours[adjustedDay].close);
  const { hour: currentHour, minute: currentMinute } = parseTime(time);

  if (isWithinTimeRange) {
    return 'The zoo is open';
  }

  return 'The zoo is closed';
};

module.exports = getOpeningHours;
