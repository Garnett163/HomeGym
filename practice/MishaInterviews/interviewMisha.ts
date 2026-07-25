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
