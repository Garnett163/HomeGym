// Promise.all
function promiseAll(promises) {
  const results = [];
  let resolvedCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        value => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        },
        error => {
          reject(error);
        },
      );
    });
  });
}

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

// Promise.allSettled
function promiseAllSettled(promises) {
  const results = [];
  let settledCount = 0;

  return new Promise(resolve => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        value => {
          results[index] = {
            status: 'fulfilled',
            value,
          };

          settledCount++;

          if (settledCount === promises.length) {
            resolve(results);
          }
        },
        reason => {
          results[index] = {
            status: 'rejected',
            reason,
          };

          settledCount++;

          if (settledCount === promises.length) {
            resolve(results);
          }
        },
      );
    });
  });
}

// Promise.race
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
}
