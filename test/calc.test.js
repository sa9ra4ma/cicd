const calc = require('../src/calc');

test('1 + 2 = 3', () => {
    expect(calc.addition(1, 2)).toBe(3);
})

test('4 - 1 = 3', () => {
    expect(calc.subtraction(4, 1)).toBe(3);
})
