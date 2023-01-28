import { Product } from './product.model';

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
};

export const calculateStock = (): number => {
  const result = products.reduce((total, item) => total + item.stock, 0);
  return result;
};
