const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find((person) => {
    const { firstName, lastName } = person;
    return employeeName === firstName || employeeName === lastName;
  });

  return employee || {};
};

module.exports = getEmployeeByName;
