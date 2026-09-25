function getObjectProperty<T, K extends keyof T>(target: T, key: K): T[K] {
  return target[key];
}
