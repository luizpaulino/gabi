const elephantsData = {
  count: 4,
  names: ['Ilana', 'Orval', 'Bea', 'Jefferson'],
  averageAge: 10.5,
  location: 'NW',
  popularity: 5,
  availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
};

const getCount = () => elephantsData.count;
const getNames = () => elephantsData.names;
const getAverageAge = () => elephantsData.averageAge;
const getLocation = () => elephantsData.location;
const getPopularity = () => elephantsData.popularity;
const getAvailability = () => elephantsData.availability;

const handlerElephants = (option) => {
  const options = {
    count: getCount,
    names: getNames,
    averageAge: getAverageAge,
    location: getLocation,
    popularity: getPopularity,
    availability: getAvailability,
  };

  if (options[option]) {
    return options[option]();
  }

  throw new Error('Opção inválida');
};

module.exports = handlerElephants;
