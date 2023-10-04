const data = require('../data/zoo_data');

function findEmployeeById(id) {
  return data.employees.find((employee) => employee.id === id);
}

function findSpeciesById(speciesId) {
  return data.species.find((species) => species.id === speciesId);
}

function findOldestAnimal(residents) {
  return residents.reduce((oldestAnimal, animal) => {
    if (animal.age > oldestAnimal.age) {
      return animal;
    }
    return oldestAnimal;
  });
}

function getOldestFromFirstSpecies(id) {
  const employee = findEmployeeById(id);

  if (employee) {
    const firstSpeciesId = employee.responsibleFor[0];
    const species = findSpeciesById(firstSpeciesId);

    if (species && species.residents.length > 0) {
      const oldestAnimal = findOldestAnimal(species.residents);
      return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
    }

    return [];
  }

  return null;
}

module.exports = { calculateEntry, countEntrants };
