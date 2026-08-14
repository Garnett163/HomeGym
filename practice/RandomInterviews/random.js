function sortingHeights(names, heights) {
  return names
    .map((name, index) => ({ name, height: heights[index] }))
    .sort((a, b) => a.height - b.height)
    .map(item => item.name);
}

console.log(sortingHeights(['Mary', 'John', 'Emma'], [180, 165, 170]));
