interface Product {
  name: string;
  price: number;
  quantity: number;
  rbg: {
    r: number;
    g: number;
    b: number;
  };
}

type PartialProduct = PartialExpect<Product, 'price' | 'quantity'>;

// type PartialExpect<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type PartialExpect<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

// type PartialExpect2<T, K extends keyof T> = { [key in K]?: T[key] } & { [key2 in Exclude<keyof T, K>]: T[key2] };

// type PartialExpect2<T, K extends keyof T>

const product: PartialProduct = {
  price: 10,
  quantity: 100,
};

console.log(product);

function merge<T, K>(obj1: T, obj2: K): T & K {
  return { ...obj1, ...obj2 };
}
const res = merge({ a: 5 }, { b: { a: 10, mes: 'test' } });

enum Colors {
  white = '#fff',
  black = '#000',
}

type AvailableColors = keyof typeof Colors;
const a: AvailableColors = 'black';

function getObjectProperty<T, K extends keyof T>(target: T, key: K): T[K] {
  return target[key];
}
const user = {
  name: 'test',
  age: 10,
};

const age = getObjectProperty(user, 'age'); // number
const getName = getObjectProperty(user, 'name'); // string

// getObjectProperty(user, 'wrong'); // Ошибка TypeScript
