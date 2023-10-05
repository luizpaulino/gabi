const data = require('../data/zoo_data');

function getOfficeHourText(day) {
  const { open, close } = data.hours[day];
  return `Open from ${open}am until ${close}pm`;
}

function getExhibition(day) {
  return data.species
    .filter((animal) => animal.availability.includes(day))
    .map((animal) => animal.name);
}

function getSchedule(animalName) {
  if (animalName) {
    const animal = data.species.find((species) => species.name === animalName);
    return animal ? animal.availability : [];
  }

  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    schedule[day] = {
      officeHour: getOfficeHourText(day),
      exhibition: getExhibition(day),
    };
  });

  return schedule;
}

module.exports = getSchedule;
