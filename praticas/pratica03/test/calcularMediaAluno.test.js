const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test('deve lançar erro se a1 ou a2 não forem informadas', () => {
    expect(() => calcularMediaAluno(undefined, 5)).toThrow('Notas a1 ou a2 não informadas');
    expect(() => calcularMediaAluno(5, undefined)).toThrow('Notas a1 ou a2 não informadas');
  });

test('deve lançar erro se a1 ou a2 forem negativas', () => {
    expect(() => calcularMediaAluno(-1, 5)).toThrow('Notas a1 ou a2 não podem ser negativas');
    expect(() => calcularMediaAluno(5, -2)).toThrow('Notas a1 ou a2 não podem ser negativas');
  });

test('deve calcular a média base quando a3 não é informada', () => {
    expect(calcularMediaAluno(6, 8)).toBeCloseTo(7.2);
  });

test('deve lançar erro se a3 for negativa', () => {
    expect(() => calcularMediaAluno(6, 7, -1)).toThrow('Nota a3 não pode ser negativa');
  });

test('deve considerar a melhor média entre a1 e a3', () => {
    expect(calcularMediaAluno(4, 8, 9)).toBeCloseTo(8.2); 
  });

test('deve considerar a melhor média entre a2 e a3', () => {
    expect(calcularMediaAluno(9, 4, 8)).toBeCloseTo(8.2);
  });