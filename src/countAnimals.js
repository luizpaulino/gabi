const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const result = {};
    data.species.forEach((species) => {
      result[species.name] = species.residents.length;
    });
    return result;
  }

  const { species, sex } = animal;
  const selectedSpecies = data.species.find((s) => s.name === species);

  if (!selectedSpecies) {
    return 0;
  }

  const filteredResidents = sex
    ? selectedSpecies.residents.filter((resident) => resident.sex === sex)
    : selectedSpecies.residents;

  return filteredResidents.length;
};

module.exports = countAnimals;
