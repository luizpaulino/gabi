const data = require('../data/zoo_data');

function getSchedule(animalName) {
  // Se animalName for fornecido e for um animal válido
  if (animalName) {
    const animal = zooData.species.find((species) => species.name === animalName);
    if (animal) {
      return animal.availability;
    }
    return []; // Retorna um array vazio se o animal não for encontrado
  }

  // Se nenhum animal for fornecido ou se o nome do animal não for válido
  const schedule = {};

  // Itera pelos dias da semana
  Object.keys(zooData.hours).forEach((day) => {
    const openHour = zooData.hours[day].open;
    const closeHour = zooData.hours[day].close;
    const officeHour = `Open from ${openHour}am until ${closeHour}pm`;

    // Lista de animais disponíveis para visitação naquele dia
    const exhibition = zooData.species
      .filter((animal) => animal.availability.includes(day))
      .map((animal) => animal.name);

    // Adiciona as informações ao objeto de retorno
    schedule[day] = {
      officeHour,
      exhibition,
    };
  });

  return schedule;
}

module.exports = getSchedule;
