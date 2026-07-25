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
