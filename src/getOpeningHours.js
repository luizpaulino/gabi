const { hours } = require('../data/zoo_data');

const validateDay = (day) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (!weekDays.includes(day)) {
    throw new Error('The day must be valid. Example: Monday');
  }
};

const getOpeningHours = (day, dataHour) => {
  if (!day || !dataHour) return 'The zoo is closed';

  const adjustedDay = day[0].toUpperCase() + day.slice(1).toLowerCase();
  validateDay(adjustedDay);

  if (dataHour === 'The zoo is closed') {
    return 'The zoo is closed';
  }

  const [time, period] = dataHour.split(' ');
  const [openTime, closeTime] = [hours[adjustedDay].open, hours[adjustedDay].close].map(parseTime);

  if (isWithinTimeRange(parseTime(time), openTime, closeTime, period)) {
    return 'The zoo is open';
  }

  return 'The zoo is closed';
};

const parseTime = (time) => {
  if (typeof time !== 'string' || !time.match(/^\d{1,2}:\d{2} [APap][Mm]$/)) {
    throw new Error('Invalid time format');
  }

  const timeParts = time.split(':');
  const [hourStr, minuteAndPeriod] = timeParts;
  const [minute, period] = minuteAndPeriod.split(' ');

  const hour = parseInt(hourStr, 10);

  if (isNaN(hour) || isNaN(parseInt(minute, 10))) {
    throw new Error('Invalid time format');
  }

  if (hour < 0 || hour > 12 || parseInt(minute, 10) < 0 || parseInt(minute, 10) > 59) {
    throw new Error('Invalid time format');
  }

  return { hour, minute: parseInt(minute, 10), period };
};

const isWithinTimeRange = (current, start, end, period) => {
  if (period === 'AM' && (current.hour < start.hour || (current.hour === start.hour && current.minute < start.minute))) {
    return false;
  }

  if (period === 'PM' && (current.hour > end.hour || (current.hour === end.hour && current.minute >= end.minute))) {
    return false;
  }

  return true;
};

module.exports = getOpeningHours;
