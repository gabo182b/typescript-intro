(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'string', true];
  prices.push(182);
  prices = [1, 8, 2];

  let products = ['product', true];
  products.push(false);

  let mixedArray: (number | string | boolean | Object)[] = [
    // Union Types
    'Mixed array',
    true,
  ];
  mixedArray.push(182);
  mixedArray.push({});
  mixedArray.push([]); // javascript recognize the array as an 'Object'

  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.map((item) => item * 2);
})();
