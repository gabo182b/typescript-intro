(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(2000, 2, 2),
    stock: 18,
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(2000, 2, 2),
    stock: 18,
    size: 'XL',
  });

  products.push({
    title: 'Product 3',
    createdAt: new Date(2002, 2, 3),
    stock: 15,
    size: 'M',
  });

  console.log(products);
})();
