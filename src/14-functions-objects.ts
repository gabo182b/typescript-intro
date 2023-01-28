(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  // login('mail@mail.com', '12345678');
  login({
    email: 'mail@mail.com',
    password: 12345678,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes | undefined;
  }) => {
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

  console.log(products);
})();
