function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}
console.log(addBinary(5, 8));

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}
console.log(isTriangle(2, 2, 2));

function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution('abcde', 'cde'));

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('What are you, a communist?')); // Wh t  r  y  ,   c mm n st?

function stringMatchup(arrayA, arrayB) {
  let mapObject = {};
  let result = [];

  for (let key of arrayA) {
    mapObject[key] = (mapObject[key] || 0) + 1;
  }

  for (let key of arrayB) {
    result.push(mapObject[key] || 0);
  }
  return result;
}
console.log(stringMatchup(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])); // [2, 1, 0]

function stringMatchup2(arrayA, arrayB) {
  return arrayB.map(i => arrayA.filter(k => k === i).length);
}
console.log(stringMatchup2(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])); // [2, 1, 0]

function buildingStringsFromHash(obj) {
  let result = '';
  for (key in obj) {
    result = result + ',' + `${key} = ${obj[key]}`;
  }
  return result.slice(1);
}
console.log(buildingStringsFromHash({ a: 1, b: '2' })); // "a = 1,b = 2"

function ageInDays(year, month, day) {
  let today = new Date();
  let myBirthday = new Date(year, month - 1, day);
  let allDays = Math.floor((today - myBirthday) / (1000 * 60 * 60 * 24));
  return `You are ${allDays} days old`;
}
console.log(ageInDays(1994, 12, 12));

function closestToZero(arr) {
  if (arr.length === 0) return null;
  let closest = arr[0];

  for (let key of arr) {
    if (key === 0) return 0;

    if (Math.abs(key) < Math.abs(closest)) {
      closest = key;
    } else if (Math.abs(key) === Math.abs(closest) && key !== closest) {
      closest = null;
    }
  }
  return closest;
}
console.log(closestToZero([3, 4, -2, 7, -3, -100]));

function closestToZero2(arr) {
  const sort = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  return Math.abs(sort[0]) !== Math.abs(sort[1]) ? sort[0] : null;
}

console.log(closestToZero2([3, 4, -2, 7, -3, -100]));

function getMissingElement(superImportantArray) {
  const maskArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return maskArray.filter(i => !superImportantArray.includes(i))[0];
}
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

function getMissingElementReduce(superImportantArray) {
  return superImportantArray.reduce((acc, curr) => acc - curr, 45);
}

console.log(getMissingElementReduce([0, 5, 1, 3, 2, 9, 7, 6, 4]));
