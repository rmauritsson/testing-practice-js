import caesarCipher from '../src/caesarCipher'

const testString = 'Lord of the Rings, book 3 is the best book ever made!';
const testWrapper = 'abcdefghijklmnopqrstuvwxyz';
const testStringCipher = 'Mpse!pg!uif!Sjoht-!cppl!4!jt!uif!cftu!cppl!fwfs!nbef"';
const testWrapperCipher = 'bcdefghijklmnopqrstuvwxyz{';

it('will convert a string into a caesar cipher code', () => {
  expect(caesarCipher.cipher(testString)).toEqual('Mpse!pg!uif!Sjoht-!cppl!4!jt!uif!cftu!cppl!fwfs!nbef"');
  expect(caesarCipher.cipher(testWrapper)).toEqual('bcdefghijklmnopqrstuvwxyz{');
});

  it('will convert a caesar cipher code into a string', () => {
  expect(caesarCipher.decipher(testStringCipher)).toEqual('Lord of the Rings, book 3 is the best book ever made!');
  expect(caesarCipher.decipher(testWrapperCipher)).toEqual('abcdefghijklmnopqrstuvwxyz');
});
