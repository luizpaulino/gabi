const data = require('../data/zoo_data');

function getSchedule(animalName) {
  if (animalName) {
    const animal = data.species.find((species) => species.name === animalName);
    if (animal) {
      return animal.availability;
    }
    return []; // Retorna um array vazio se o animal não for encontrado
  }

  // Se nenhum animal for fornecido, retorna um objeto com todos os horários disponíveis para cada dia da semana
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    schedule[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  });

  return schedule;
}

module.exports = getSchedule;
