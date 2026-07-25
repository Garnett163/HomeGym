function persistence(num) {
  let current = 1;
  if (num < 10) return 0;
  const array = String(num).split('');

  for (let i = 0; i < array.length; i++) {
    current *= +array[i];
  }
  return 1 + persistence(current);
}
console.log(persistence(999));

function sortArray(array) {
  let oddIndex = 0;
  const oddNumbers = array.filter(i => i % 2 !== 0).sort((a, b) => a - b);
  const result = array.map(i => {
    if (i % 2 === 0) {
      return i;
    } else {
      return oddNumbers[oddIndex++];
    }
  });

  return result;
}
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]

function createPhoneNumber(numbers) {
  const numString = numbers.join('');
  const firstPart = numString.slice(0, 3);
  const secondPart = numString.slice(3, 6);
  const thirdPart = numString.slice(6, 10);
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function breakCamelCase(string) {
  if (string.trim() === '') return '';
  let result = '';
  const array = string.split('');
  array.forEach(i => {
    if (i === i.toUpperCase()) {
      result += ` `;
    }
    result += i;
  });
  return result;
}
console.log(breakCamelCase('camelCasing'));

function compSame(array1, array2) {
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;

  const sortAndMultiArray1 = array1.sort((a, b) => a - b).map(i => i * i);
  const sortArray2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sortAndMultiArray1.length; i++) {
    if (sortAndMultiArray1[i] !== sortArray2[i]) {
      return false;
    }
  }

  return true;
}
console.log(
  compSame(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
  ),
);

function towerBuilder(nFloors) {
  let result = Array.from({ length: nFloors }).map((_, i) => {
    const stars = '*'.repeat(2 * i + 1);
    const spaces = ' '.repeat(nFloors - i - 1);
    return spaces + stars + spaces;
  });
  return result;
}
console.log(towerBuilder(3));
