function solution(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = i + sum;
    }
  }
  return sum;
}

solution(10);

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

const sumValues = obj => {
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
};

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

// const flattenObject = (obj, prefix = '') => {
//   const result = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//       const newKey = prefix ? `${prefix}.${key}` : key;
//       if (typeof value === 'object' && value !== null) {
//         const nestedResult = flattenObject(value, newKey);
//         for (let nestedKey in nestedResult) {
//           result[nestedKey] = nestedResult[nestedKey];
//         }
//       } else {
//         result[newKey] = value;
//       }
//     }
//   }
//   return result;
// };

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
