import reverseString from '../src/reverseString';

it('Reverse string passed to it', () => {
  expect(reverseString('hello')).toMatch(/olleh/);
  expect(reverseString('hello')).not.toMatch(/hello/);
  expect(reverseString('hello')).toEqual('olleh');
});
