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
