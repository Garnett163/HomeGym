function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
console.log(bmi(87, 184));

function beginnerSeriesClock(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
console.log(beginnerSeriesClock(0, 1, 1));

function rockPaperScissors(player1, player2) {
  const wins = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  if (player1 === player2) return 'Draw!';

  if (wins[player1] === player2) {
    return 'Player 1 won!';
  }
  if (wins[player2] === player1) {
    return 'Player 2 won!';
  }
}
console.log(rockPaperScissors('paper', 'scissors'));

function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map(i => i.split('').join(separator))
    .join(' ');
}
console.log(splitAndMerge('My name is John', '-')); // "M-y n-a-m-e i-s J-o-h-n"

function arrayDiff(a, b) {
  return a.filter(i => !b.includes(i));
}
console.log(arrayDiff([1, 2, 3], [1, 2]));

function squareDigits(num) {
  return +String(num)
    .split('')
    .map(i => i * i)
    .join('');
}
console.log(squareDigits(3212));

function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}
console.log(basicOp('+', 4, 7));

function everyMethod(arr, fun) {
  if (!Array.isArray(arr)) return false;
  for (item of arr) {
    if (fun(item) === false) return false;
  }
  return true;
}
console.log(
  everyMethod([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  }),
);

function totalAmountOfPoints(games) {
  let result = 0;

  const scoresArray = games.map(i => i.split(':').map(k => +k));
  for (const item of scoresArray) {
    if (item[0] > item[1]) {
      result += 3;
    } else if (item[0] === item[1]) {
      result += 1;
    }
  }

  return result;
}
console.log(totalAmountOfPoints(['1:0', '2:0', '1:1', '0:4']));

function findNeedle(haystack) {
  let result = '';
  const indexNeedle = haystack.indexOf('needle');
  result = `found the needle at position ${indexNeedle}`;
  return result;
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

function betterThanAverage(classPoints, yourPoints) {
  const avaragePoints = (classPoints.reduce((acc, value) => acc + value) + yourPoints) / classPoints.length;

  console.log(avaragePoints);
  if (avaragePoints > yourPoints) {
    return false;
  }
  return true;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld >= sonYearsOld * 2 ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 - dadYearsOld;
}
console.log(twiceAsOld(36, 7)); // 22

function areYouPlayingBanjo(name) {
  let char = 'R';
  return name[0].toLowerCase() === char.toLowerCase() ? `${name} plays banjo` : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('Ringo'));

function contamination(text, char) {
  return text
    .split('')
    .map(i => {
      if (i === '') {
        return '';
      } else {
        return (i = char);
      }
    })
    .join('');
}
console.log(contamination('abc', 'z'));

function nextItem(array, item) {
  let found = false;

  for (const current of xs) {
    if (found) return current;
    if (current === item) found = true;
  }

  return undefined;
}
console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 6

function nearestSq(n) {
  const nearestNum = Math.round(Math.sqrt(n));
  return Math.pow(nearestNum, 2);
}
console.log(nearestSq(111));

function sumArrayReduce(numbers) {
  return numbers.reduce((acc, value) => acc + value, 0);
}
console.log(sumArrayReduce([1, 5.2, 4, 0, -1]));

function isPalindrome(x) {
  let startChar = 0;
  let endChar = x.length - 1;

  while (startChar < endChar) {
    if (x[startChar].toLowerCase() !== x[endChar].toLowerCase()) {
      return false;
    } else {
      startChar++;
      endChar--;
    }
  }
  return true;
}

console.log(isPalindrome('madam ? ada'));

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Not Number';
  }
}

console.log(switchItUp(2));

function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogYears += 15;
      catYears += 15;
    } else if (i === 2) {
      dogYears += 9;
      catYears += 9;
    } else {
      dogYears += 5;
      catYears += 4;
    }
  }

  return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(10)); // [2, 24, 24]

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c), a * b + c, a + b * c);
}

console.log(expressionMatter(2, 1, 2), 6);

String.prototype.toAlternatingCase = function () {
  let result = '';

  for (const key of this) {
    if (key === key.toLowerCase()) {
      result += key.toUpperCase();
    } else {
      result += key.toLowerCase();
    }
  }

  return result;
};

function findAverage(array) {
  if (array.length === 0) return 0;
  const sum = array.reduce((acc, val) => acc + val, 0);
  return sum / array.length;
}

console.log(findAverage([1, 2, 3])); // 2

function enough(cap, on, wait) {
  const calc = wait - (cap - on);
  return calc <= 0 ? 0 : calc;
}
console.log(enough(100, 33, 66));

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      continue;
    } else {
      return arr[i + 1];
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6

function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}
console.log(checkForFactor(10, 2)); // true

function findMultiples(integer, limit) {
  const result = [];
  let newValue = integer;

  while (newValue <= limit) {
    result.push(newValue);
    newValue += integer;
  }

  return result;
}
console.log(findMultiples(2, 6)); // [2, 4, 6]

function twoHighest(arr) {
  if (!arr.length) return [];
  const setArr = new Set(arr);
  const sortedArr = [...setArr].sort((a, b) => b - a);

  return sortedArr.slice(0, 2);
}
console.log(twoHighest([4, 10, 10, 9]));

function between(a, b) {
  let result = [a];
  let start = a;

  while (start < b) {
    const nextElem = start + 1;
    result.push(nextElem);
    start = nextElem;
  }
  return result;
}
console.log(between(1, 4)); // [1, 2, 3, 4]

function pipeFix(numbers) {
  let result = [];
  let startNum = numbers[0];
  let endNum = numbers.length - 1;

  for (let i = startNum; i <= numbers[endNum]; i++) {
    result.push(i);
  }

  return result;
}
console.log(pipeFix([1, 2, 3, 4, 12]));
