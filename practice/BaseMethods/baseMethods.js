function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let inThrottle = false;

  return function (...args) {
    if (inThrottle) return;

    inThrottle = true;

    setTimeout(() => {
      inThrottle = false;
    }, limit);

    func.apply(this, args);
  };
}

function memoize(fn, resolver) {
  const cache = new Map();

  return function (...args) {
    const key = resolver ? resolver(...args) : args[0];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);

    cache.set(key, result);

    return result;
  };
}

async function simpleFetch() {
  try {
    const response = await fetch('https://example.com', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
const curriedAdd = curry(addCurry);
const result = curriedAdd(1)(2)(3);
console.log(result);

function map(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const mapperValue = callback(array[i], i, array);
    result.push(mapperValue);
  }

  return result;
}

const arrayMap = [1, 2, 3, 4, 5];
console.log(map(arrayMap, item => item * 2));

function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

const arrayfilter = [1, 2, 3, 4, 5];
console.log(filter(arrayfilter, item => item % 2 === 0));

function reduce(array, callback, initialValue) {
  const hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : array[0];

  for (let i = hasInitialValue ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const arrayReduce = [1, 2, 3, 4, 5];
console.log(
  reduce(
    arrayReduce,
    (acc, curr) => {
      return acc + curr;
    },
    0,
  ),
);
