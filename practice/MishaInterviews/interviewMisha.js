const values = [1, 1, 2, 2, 2, 4, 4, 5, 6, 7, 9, 10];
const valuesTwo = [1, 3, 4, 7, 8, 9, 9];

const getArrayMeta = (...arrays) => {
  const mapCount = {};
  const uniqueValues = [];
  const duplicateValues = {};
  const commonArray = [...arrays.flat(1)];

  commonArray.forEach(item => {
    if (mapCount[item]) {
      mapCount[item] += 1;
    } else {
      mapCount[item] = 1;
    }
  });

  for (let key in mapCount) {
    const count = mapCount[key];
    if (count === 1) {
      uniqueValues.push(+key);
    } else {
      duplicateValues[key] = count;
    }
  }

  return {
    uniqueValues,
    duplicateValues,
  };
};
console.log(getArrayMeta(values, valuesTwo));

const valuesObj = {
  a: {
    a: 1,
    b: {
      a: 2,
      b: {
        a: 3,
      },
    },
    c: null,
  },
  b: {
    a: {
      a: {
        a: {
          a: '5',
          b: 3,
        },
        b: 2,
      },
    },
  },
  c: 'test',
};

function sumValues(obj) {
  let sum = 0;

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      sum += sumValues(value);
    } else if (typeof value === 'number') {
      sum += value;
    } else if (typeof value === 'string' && !isNaN(Number(value))) {
      sum += Number(value);
    }
  }

  return sum;
}

console.log(sumValues(valuesObj)); // 16

const objTwo = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
};

const flattenObject = (obj, prefix = '', result = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        flattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
};

const flattenedObject = flattenObject(objTwo);
console.log(flattenedObject); // {"f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2}

function median(arr) {
  if (arr.length === 0) return undefined;

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  // console.log(mid);
  console.log(sorted[mid - 1], sorted[mid]);
  // console.log(sorted[mid - 1] + sorted[mid]);

  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

console.log(median([1, 3, 5, 7, 8, 9]));

const folders = [
  { id: 1, parentId: null, children: [] },
  { id: 2, parentId: 1, children: [] },
  { id: 3, parentId: 2, children: [] },
  { id: 4, parentId: 2, children: [] },
  { id: 5, parentId: 4, children: [] },
  { id: 6, parentId: 5, children: [] },
];

function mapTree(folders) {
  const mapObject = {};
  let rootDir;

  for (const folder of folders) {
    mapObject[folder.id] = { ...folder };
    if (folder.parentId === null) {
      rootDir = mapObject[folder.id];
    }
  }

  for (const folder of folders) {
    const parent = mapObject[folder.parentId];

    if (parent) {
      parent.children.push(mapObject[folder.id]);
    }
  }
  return rootDir;
}

console.log(mapTree(folders));

function sum(...nums) {
  let result = 0;
  nums.forEach(i => (result += i));

  function curried(...args) {
    if (!args.length) return result;

    args.forEach(i => (result += i));
    return curried;
  }
  return curried;
}

console.log(sum(3)(2)(1, 2)(3)()); // 5

function uniq(array) {
  const map = new Map();

  for (const item of array) {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
  }
  console.log([...map.values()]);
}
console.log(
  uniq([
    { id: 1, name: 'item #1' },
    { id: 3, name: 'item #1' },
    { id: 1, name: 'item #1' },
    { id: 4, name: 'item #1' },
    { id: 2, name: 'item #1' },
    { id: 3, name: 'item #1' },
  ]),
);

function isAnagram(str1, str2) {
  // if (s1.length !== s2.length) return false;
  // return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

  const map = new Map();

  for (const char of str1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const char of str2) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  console.log(map);
  return true;
}
console.log(isAnagram('кабан', 'банка'));

function groupAnagrams(words) {
  const map = {};
  for (let item of words) {
    const sorted = item.split('').sort().join('');
    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(item);
  }

  // console.log(map);
  return Object.values(map);
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

function getTopCustomers(orders, topN) {
  const map = {};

  for (const order of orders) {
    if (order.status === 'pending') continue;

    if (map[order.id]) {
      map[order.id] += order.amount;
    } else {
      map[order.id] = order.amount;
    }
  }
  // console.log(map);
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(item => item[0]);
}
console.log(
  getTopCustomers(
    [
      { id: 'A', amount: 100, status: 'complited' },
      { id: 'B', amount: 200, status: 'complited' },
      { id: 'A', amount: 50, status: 'complited' },
      { id: 'C', amount: 300, status: 'pending' },
      { id: 'B', amount: 5, status: 'pending' },
    ],
    2,
  ),
);

const objValues = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 3 }] },
    { value: 4, children: [{ value: 5 }, { value: 6 }] },
  ],
};

function getTreeValues(tree) {
  const result = [];
}

console.log(getTreeValues(objValues)); // [1,2,3,4,5,6]
