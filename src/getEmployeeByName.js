const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find(({ firstName, lastName }) => 
    employeeName === firstName || employeeName === lastName
  );

  return employee || {};
};

module.exports = getEmployeeByName;
