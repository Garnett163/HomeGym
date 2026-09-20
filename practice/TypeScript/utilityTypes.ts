type MyRecord<K extends PropertyKey, T> = {
  [P in K]: T;
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
