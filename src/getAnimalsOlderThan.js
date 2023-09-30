const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((s) => s.name === animal).residents;

  if (!animals) {
    return false;
  }
  const allMeetAgeCriteria = animals.every((specie) => specie.age >= age);

  return allMeetAgeCriteria;
};

module.exports = getAnimalsOlderThan;
