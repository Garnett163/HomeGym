function promisePool(tasks, limit) {
  const results = [];
  let currentIndex = 0;
  let completed = 0;

  return new Promise(resolve => {
    function next() {
      if (completed === tasks.length) {
        resolve(results);
        return;
      }

      if (currentIndex >= tasks.length) {
        return;
      }

      const index = currentIndex++;
      const task = tasks[index];

      task()
        .then(result => (results[index] = result))
        .catch(error => (results[index] = error))
        .finally(() => {
          completed++;
          next();
        });
    }

    for (let i = 0; i < Math.min(limit, tasks.length); i++) {
      next();
    }
  });
}

const tasks = [() => Promise.resolve(1), () => new Promise(r => setTimeout(() => r(2), 100)), () => Promise.resolve(3)];
promisePool(tasks, 2).then(console.log); //  promisePool(tasks, 2).then(console.log()) // 1 2 3
