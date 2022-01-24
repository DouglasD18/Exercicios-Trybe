const sum = require('./sum.js');

describe('Soma dois números', () => {
  it('Soma 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  })

  it('Soma 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })

  it('Testa se é lançado um erro quando recebe 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
