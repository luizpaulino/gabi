const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const speciesArray = data.species.filter((s) => s.name === animal);

  if (speciesArray.length === 0) {
    return false;
  }

  const allMeetAgeCriteria = speciesArray.every((species) => {
    return species.residents.every((resident) => resident.age >= age);
  });

  return allMeetAgeCriteria;
};

module.exports = getAnimalsOlderThan;
