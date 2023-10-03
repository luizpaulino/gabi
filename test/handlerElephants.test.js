const handlerElephants = require('../src/handlerElephants');

const species = [
  {
    id: 'elephants',
    residents: [
      { name: 'Ilana', age: 12, location: 'NW', popularity: 3 },

    ],
  },
];
const elephantsId = 'elephants';

describe('handlerElephants', () => {
  it('deve retornar a quantidade de elefantes', () => {
    const option = 'count';
    const result = handlerElephants(option);
    expect(result).toBe(4);
  });

  it('deve retornar um array com os nomes de todos os elefantes', () => {
    const option = 'names';
    const result = handlerElephants(option);
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(result).toEqual(expected);
  });

  it('deve retornar a média de idade dos elefantes', () => {
    const option = 'averageAge';
    const result = handlerElephants(option);
    const expected = 10.5;
    expect(result).toBeCloseTo(expected, 2);
  });

  it('deve retornar a localização dos elefantes', () => {
    const option = 'location';
    const result = handlerElephants(option);
    expect(result).toEqual('NW');
  });

  it('deve retornar a popularidade dos elefantes', () => {
    const option = 'popularity';
    const result = handlerElephants(option);
    const expected = 5; 
    expect(result).toBe(expected);
  });

  it('deve retornar um array com os dias de disponibilidade dos elefantes', () => {
    const option = 'availability';
    const result = handlerElephants(option);
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(result).toEqual(expected);
  });
});


