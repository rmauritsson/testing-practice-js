export default function cipher(string, offset = 1) {
  const array = string.split('');
  const cipherArray = [];

  for (let i = 0; i < array.length; i += 1) {
    cipherArray.push(array[i].charCodeAt(0));
    cipherArray[i] = String.fromCharCode(cipherArray[i] + offset);
  }

  return cipherArray.join('');
}
