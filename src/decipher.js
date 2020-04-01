export default function decipher(string, offset = 1) {
  const array = string.split('');
  const decipherArray = [];

  for (let i = 0; i < array.length; i += 1) {
    decipherArray.push(array[i].charCodeAt(0));
    decipherArray[i] = String.fromCharCode(decipherArray[i] - offset);
  }

  return decipherArray.join('');
}
