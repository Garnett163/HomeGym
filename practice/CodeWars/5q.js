function productFib(prod) {
  let first = 0;
  let second = 1;

  while (first * second <= prod) {
    const product = first * second;

    if (product === prod) {
      return [first, second, true];
    }

    const next = first + second;
    first = second;
    second = next;
  }
  return [first, second, false];
}

console.log((productFib(4895), [55, 89, true]));

function incrementString(strng) {
  let nums = '';
  let words = '';

  for (let i = strng.length - 1; i >= 0; i--) {
    if (!Number.isNaN(Number(strng[i]))) {
      nums = strng[i] + nums;
    } else {
      words = strng.slice(0, i + 1);
      break;
    }
  }

  if (nums === '') {
    return words + '1';
  }

  let plusOne = Number(nums) + 1;
  nums = String(plusOne).padStart(nums.length, '0');

  return words + nums;
}
// console.log(incrementString('1'));
console.log(incrementString('foobar'));
console.log(incrementString('foobar123')); // "foobar001"
console.log(incrementString('foobar999')); // "foobar1000"
