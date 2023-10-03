const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('deve retornar as horas de abertura para um dia válido e horário válido', () => {
    const day = 'Monday';
    const validHour = '09:30';
    const result = getOpeningHours(day, validHour);
    expect(result).toBe('The zoo is open');
  });
  it('deve retornar "The zoo is closed" para um dia válido e horário de fechamento', () => {
    const day = 'Monday';
    const invalidHour = '18:00';
    const result = getOpeningHours(day, invalidHour);
    expect(result).toBe('The zoo is closed');
  });
  it('deve lançar um erro para um horário inválido', () => {
    const day = 'Wednesday';
    const invalidHour = '9:30 AM - 6:00 PM';
    expect(() => getOpeningHours(day, invalidHour)).toThrowError('The hour should represent a number');
  });
});
