const first = [0, 3, 1, 5, 3, 7, 9];
const second = [0, 5, 3, 8, 9, 9];

function getCommonIds(first, second) {
  const setFirst = new Set(first);

  return [...setFirst].filter(i => {
    return second.includes(i);
  });
}

console.log(getCommonIds(first, second)); // [3, 5, 9]

const obj = {
  name: 'John',
  age: 30,
  isStudent: true,

  getName() {
    return this.name;
  },
};

const fn = obj.getName();
console.log(fn);
