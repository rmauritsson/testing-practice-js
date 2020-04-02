import capitalize from '../src/capitalize';

it('Adding a undercase string should return the same string with the first letter uppercase', () => {
  expect(capitalize('john')).toMatch(/John/);
  expect(capitalize('sarah')).toMatch(/Sarah/);
  expect(capitalize('1aea')).toMatch(/1aea/);
  expect(capitalize('jair')).toMatch(/Jair/);
});
