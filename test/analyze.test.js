import analyze from '../src/analyze';

const arr = analyze([1, 8, 3, 4, 2, 6]);

it('Gets the average of the array', () => {
  expect(arr.average).toBe(4);
  expect(arr.average).toEqual(4);
});

it('Gets the Minimum value of the array', () => {
  expect(arr.min).toBe(1);
  expect(arr.min).toEqual(1);
});

it('Gets the Maximum value of the array', () => {
  expect(arr.max).toBe(8);
  expect(arr.max).toEqual(8);
});

it('Gets the length of the array', () => {
  expect(arr.length).toBe(6);
  expect(arr.length).toEqual(6);
});
