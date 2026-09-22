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

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(diff, i);
  }

  console.log(map);
  return [];
}

console.log(twoSum([2, 11, 15, 7], 9)); // [0, 3]

function uniqueInOrder(iterable) {
  const result = [];

  let index = 0;

  for (const key of iterable) {
    if (key === result[index - 1]) {
      continue;
    }
    result.push(key);
    index++;
  }

  return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']

function fizzBuzzCustom(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
  let result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      result.push(stringOne + stringTwo);
    } else if (i % numOne === 0) {
      result.push(stringOne);
    } else if (i % numTwo === 0) {
      result.push(stringTwo);
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzzCustom());
console.log(fizzBuzzCustom('Foo', 'Bar', 2, 3));

function once(func) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      flag = true;
      return func(...args);
    }
  };
}
// console.log(once());
logOnce = once(console.log);
logOnce('foo'); // -> "foo"
logOnce('bar'); // -> no effect

function scoreThrows(radii) {
  if (!radii.length) return 0;
  let result = 0;
  let bonusFlag = true;

  for (let rad of radii) {
    if (rad > 10) {
      bonusFlag = false;
      continue;
    } else if (rad <= 10 && rad >= 5) {
      result += 5;
      bonusFlag = false;
    } else if (rad < 5) {
      result += 10;
    }
  }
  if (bonusFlag) {
    result += 100;
  }
  return result;
}

console.log(scoreThrows([0, 5, 10, 10.5, 4.5])); // 15

Array.prototype.reduce = function (process, initial) {
  const hasInitialValue = initial !== undefined;

  let accumulator = hasInitialValue ? initial : this[0];

  for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
    accumulator = process(accumulator, this[i], i, this);
  }

  return accumulator;
};

function NumberFromEveryPossibleSumOfTwoDigits(sums) {
  if (sums.length === 0) {
    return 0;
  }

  let digitsCount = 1;

  while ((digitsCount * (digitsCount - 1)) / 2 < sums.length) {
    digitsCount++;
  }

  // Особый случай: исходное число состояло из двух цифр.
  if (digitsCount === 2) {
    const sum = sums[0];

    // Ищем любые две цифры, которые дают эту сумму.
    for (let a = 1; a <= 9; a++) {
      const b = sum - a;

      if (b >= 0 && b <= 9) {
        return Num33ber(`${a}${b}`);
      }
    }
  }

  // 2. Первые элементы массива имеют такой вид:
  //
  // a+b, a+c, a+d, ...
  //
  // Нам нужны:
  // a+b
  // a+c
  // b+c

  const ab = sums[0];
  const ac = sums[1];

  // После всех сумм с "a" начинается группа с "b".
  // Поэтому b+c находится на индексе digitsCount - 1.
  const bc = sums[digitsCount - 1];

  // 3. Восстанавливаем первую цифру.
  const a = (ab + ac - bc) / 2;

  // 4. Зная a, можем восстановить остальные цифры.
  const digits = [a];

  // Первые digitsCount - 1 элементов:
  // a+b, a+c, a+d, a+e...
  for (let i = 0; i < digitsCount - 1; i++) {
    digits.push(sums[i] - a);
  }

  // 5. Склеиваем цифры в число.
  return Number(digits.join(''));
}
console.log(NumberFromEveryPossibleSumOfTwoDigits([6, 7, 11])); // 156

function createMessage(...args) {
  let words = [...args];

  function next(word) {
    if (word) {
      words = [...words, word];
      return next;
    } else {
      return words.join(' ');
    }
  }

  return next;
}
console.log(createMessage('Hello')('World!')('how')('are')('you?')());
createMessage('Hello')('World!');

function millipedeOfWords(words) {
  function search(currentIndex, used) {
    if (used.size === words.length) {
      return true;
    }
    const currentWord = words[currentIndex];
    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];

      if (!used.has(i) && currentWord.at(-1) === nextWord[0]) {
        used.set(i, true);
        if (search(i, used)) {
          return true;
        }
        used.delete(i);
      }
    }
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    const used = new Map();
    used.set(i, true);
    if (search(i, used)) {
      return true;
    }
  }
  return false;
}

console.log(millipedeOfWords(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night'])); // true

function countSmileys(arr) {
  const eyes = [':', ';'];
  const noses = ['-', '~'];
  const mouths = [')', 'D'];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 2) {
      const hasEyes = eyes.includes(arr[i][0]);
      const hasMouth = mouths.includes(arr[i][1]);
      if (hasEyes && hasMouth) {
        count++;
      }
    }

    if (arr[i].length === 3) {
      const hasEyes = eyes.includes(arr[i][0]);
      const hasNoses = noses.includes(arr[i][1]);
      const hasMouth = mouths.includes(arr[i][2]);
      if (hasEyes && hasMouth && hasNoses) {
        count++;
      }
    }
  }

  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
