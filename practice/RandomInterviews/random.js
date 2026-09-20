function sortingHeights(names, heights) {
  return names
    .map((name, index) => ({ name, height: heights[index] }))
    .sort((a, b) => a.height - b.height)
    .map(item => item.name);
}

console.log(sortingHeights(['Mary', 'John', 'Emma'], [180, 165, 170]));

function hasDuplicates(strings) {
  const map = new Map();

  for (const char of strings) {
    if (map.has(char)) {
      return true;
    }

    map.set(char, false);
  }

  return false;
}
console.log(hasDuplicates(['a', 'b', 'a'])); // true
console.log(hasDuplicates(['a', 'b', 'c'])); // false

function createCharReader(str) {
  let count = 0;
  return function () {
    return str[count++] ?? null;
  };
}
const read = createCharReader('abc');
console.log(read()); // a
console.log(read()); // b
console.log(read()); // c
console.log(read()); // null
