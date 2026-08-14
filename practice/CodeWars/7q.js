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

function isIsogram(str) {
  const map = new Map();
  let index = 0;

  for (const item of str) {
    if (map.has(item.toLowerCase())) {
      return false;
    } else {
      map.set(item.toLowerCase(), index);
      index++;
    }
  }

  return true;
}
console.log(isIsogram('moOse'));

function reverseWords(str) {
  return str
    .split(' ')
    .map(i => i.split('').reverse().join(''))
    .join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

function divideAndConquer(array) {
  let sumNum = 0;
  let sumString = 0;

  for (let item of array) {
    if (typeof item === 'number') {
      sumNum += item;
    } else {
      sumString += Number(item);
    }
  }
  return sumNum - sumString;
}
console.log(divideAndConquer([9, 3, '4', '5'])); // 3

function isRubyComing(list) {
  const filterRubyDevs = list.filter(i => i.language === 'Ruby');
  return filterRubyDevs.length > 0 ? true : false;
}
console.log(
  isRubyComing([
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  ]),
);

function decreasingInputs(...args) {
  return Math.round(args.reduce((acc, value, index) => acc + value / (index + 1), 0));
}
console.log(decreasingInputs(170, 190, 369, -308, -168, 332, -234, -439, 57, -111, 397, 143, -427, 429, 185));

function validParentheses(parenStr) {
  let countLeft = 0;
  let countRight = 0;

  for (const char of parenStr) {
    if (countRight > countLeft) {
      break;
    } else if (char === '(') {
      countLeft++;
    } else {
      countRight++;
    }
  }
  return countLeft === countRight;
}
console.log(validParentheses('())(()')); // false
