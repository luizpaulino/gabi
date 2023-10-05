const data = require('../data/zoo_data');

const classifyEntrant = (age) => {
  if (age >= 60) return 'senior';
  if (age >= 18) return 'adult';
  return 'child';
};

const countEntrants = (entrants) => {
  const counts = {
    adult: 0,
    child: 0,
    senior: 0,
  };

  if (entrants && Array.isArray(entrants)) {
    for (const entrant of entrants) {
      const category = classifyEntrant(entrant.age);
      counts[category] += 1;
    }
  }

  return counts;
};

const calculateEntry = (entrants) => {
  const counts = countEntrants(entrants);

  // Garanta que as contagens sejam números, mesmo que inicialmente sejam undefined
  counts.adult = counts.adult || 0;
  counts.child = counts.child || 0;
  counts.senior = counts.senior || 0;

  // Calcule o valor total da entrada e ajuste para duas casas decimais
  const total = (counts.adult * data.prices.adult +
                 counts.child * data.prices.child +
                 counts.senior * data.prices.senior).toFixed(2);

  return parseFloat(total);
};

module.exports = { calculateEntry, countEntrants };
