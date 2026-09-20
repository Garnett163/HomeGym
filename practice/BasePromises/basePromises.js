// Promise.any
function promiseAny(promises) {
  const errors = [];
  let rejectedCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item).then(resolve, error => {
        errors[index] = error;
        rejectedCount++;

        if (rejectedCount === promises.length) {
          reject(errors);
        }
      });
    });
  });
}
