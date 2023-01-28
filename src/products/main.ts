import { products, createProduct, calculateStock } from './product.service';

createProduct({
  name: 'Product 1',
  createdAt: new Date(2000, 2, 2),
  stock: 5,
});

createProduct({
  name: 'Product 2',
  createdAt: new Date(2000, 2, 2),
  stock: 6,
  size: 'XL',
});

console.log(products);

const total = calculateStock();

console.log(total);
