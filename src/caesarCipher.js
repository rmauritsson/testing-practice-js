/* eslint-disable no-console */
class CaesarCipher {
  static cipher(string, offset = 1) {
    const array = string.split('');
    const cipher = [];

    for (let i = 0; i < array.length; i += 1) {
      cipher.push(array[i].charCodeAt(0));
      cipher[i] = String.fromCharCode(cipher[i] + offset);
    }

    return cipher.join('');
  }

  static decipher(string, offset = 1) {
    const array = string.split('');
    const decipher = [];

    for (let i = 0; i < array.length; i += 1) {
      decipher.push(array[i].charCodeAt(0));
      decipher[i] = String.fromCharCode(decipher[i] - offset);
    }

    return decipher.join('');
  }
}

export default CaesarCipher;
