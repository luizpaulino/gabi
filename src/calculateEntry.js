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

  // Certifique-se de que todas as propriedades estejam definidas
  counts.adult = counts.adult || 0;
  counts.child = counts.child || 0;
  counts.senior = counts.senior || 0;

  // Calcule o valor total da entrada
  const total = counts.adult * 49.99 + counts.child * 24.99 + counts.senior * 34.99;

  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
