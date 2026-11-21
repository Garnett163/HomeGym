function reduce<T, K>(array: T[], callback: (acc: K, value: T, index: number) => K, initial: K): K {
  let acc = initial;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }

  return acc;
}
