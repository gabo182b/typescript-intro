(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date, // TS doesnt pop up an alert when you type 'Date' with the first latter with uppercase
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.createdAt);

  const reateProductToJsonVersion2 = (
    title: string,
    createdAt: Date, // TS doesnt pop up an alert when you type 'Date' with the first latter with uppercase
    stock: number,
    size?: Sizes | undefined // the '?' after the parameter makes it optional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const product2 = reateProductToJsonVersion2('P2', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);
})();
