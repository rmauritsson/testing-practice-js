import calculator from '../src/calculator';

it('Successfully adds the numbers given', () => {
  expect(calculator.add(1, 4)).toBe(5);
  expect(calculator.add(-7, 8)).toBe(1);
});
it('Successfully carries out multiplication on the numbers given', () => {
  expect(calculator.multiply(1, 4)).toBe(4);
  expect(calculator.multiply(-8, 10)).toBe(-80);
});

it('Successfully carries out division on the numbers given', () => {
  expect(calculator.divide(4, 4)).toBe(1);
  expect(calculator.divide(-7, 8)).not.toBe(1);
});

it('Successfully carries out subtraction on the numbers given', () => {
  expect(calculator.subtract(1, 7)).toBe(-6);
  expect(calculator.subtract(-7, 8)).toBe(-15);
});
