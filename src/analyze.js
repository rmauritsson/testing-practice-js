export default function analyze(array) {
  const lengthArray = array.length;
  let sum = 0;
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < lengthArray; i += 1) {
    sum += array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
  }
  const average = sum / lengthArray;

  return {
    average,
    min,
    max,
    length: lengthArray,
  };
}
