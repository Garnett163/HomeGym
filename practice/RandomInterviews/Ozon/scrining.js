function one(operation) {
  if (operation) {
    return operation(1);
  }

  return 1;
}
function plus(rightNum) {
  return function (leftNum) {
    return leftNum + rightNum;
  };
}
function two(operation) {
  if (operation) {
    return operation(2);
  }

  return 2;
}
console.log(one(plus(two()))); // 3
console.log(two(plus(one()))); // 3

function getLargestCategory(categories) {
  if (!categories.length) {
    return 'empty';
  }
  const map = {};

  for (const item of categories) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  }

  const findPopularNumber = Math.max(...Object.values(map));
  const filteredPopular = Object.entries(map).filter(item => item[1] === findPopularNumber);

  if (filteredPopular.length > 1) {
    return 'mixed';
  } else {
    return filteredPopular[0][0];
  }
}
console.log(getLargestCategory(['beer'])); // 'beer'
console.log(getLargestCategory(['beer', 'salad', 'beer'])); // 'beer'
console.log(getLargestCategory([])); // 'empty'
console.log(getLargestCategory(['beer', 'water', 'salad'])); // 'mixed'
console.log(getLargestCategory(['beer', 'water', 'beer', 'water', 'salad'])); // 'mixed'

function unusedCashback(activeCategories, operations) {
  const map = {};

  for (let i = 0; i < operations.length; i++) {
    const curr = operations[i];

    if (!map[curr.category]) {
      map[curr.category] = true;
    }
  }
  console.log(map);
  return activeCategories.filter(item => {
    if (map[item]) {
      return false;
    } else {
      return true;
    }
  });
  // return activeCategories.filter(item => !map[item]);
  // return activeCategories.filter(category => operations.every(item => item.category !== category));
}
console.log(unusedCashback(['groceries', 'bar'], [{ category: 'groceries' }, { category: 'fuel' }])); // ['bar']
console.log(unusedCashback(['groceries', 'bar', 'fuel'], [{ category: 'groceries' }, { category: 'fuel' }])); // ['bar']
console.log(unusedCashback(['groceries', 'bar'], [{ category: 'groceries' }, { category: 'bar' }])); // []

const getData = async () => {
  const promises = ['posts', 'users', 'comments'].map(async method => {
    (await fetch(`https://jsonplaceholder.typicode.com/${method}`)).json();
  });

  const [posts, users, comments] = await Promise.all(promises);

  const usersMap = {};
  const commentsMap = {};

  for (let i = 0; i < users.length; i++) {
    const curr = users[i];
    usersMap[curr.id] = curr.name;
  }

  for (let i = 0; i < comments.length; i++) {
    const curr = comments[i];

    if (!commentsMap[curr.postId]) {
      commentsMap[curr.postId] = 1;
    } else {
      commentsMap[curr.postId] += 1;
    }
  }

  return posts.map(post => ({
    id: post.id,
    title: post.title,
    userName: usersMap[post.userId],
    commentsCount: commentsMap[post.id] ?? 0,
    // userName: users.find(user => user.id === post.userId)?.name,
    // commentsCount: comments.filter(comment => comment.postId === post.id).length,
  }));
};

getData().then(console.log);

function isSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map = {};

  for (const item of arr1) {
    map[item] = (map[item] || 0) + 1;
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
  }

  for (const item of arr2) {
    if (!map[item]) {
      return false;
    } else {
      map[item] -= 1;
    }
  }

  return true;
}

console.log(isSimilar([1, 2, 3], [3, 2, 1])); // true
console.log(isSimilar([1, 2, 3, 6], [3, 2, 1, 8])); // true
