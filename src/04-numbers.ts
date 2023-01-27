(() => {
  // inferred
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  // explicit
  let age: number = 28;
  // age = age + '1'; // wrong type
  age = age + 1;
  console.log('age', age);

  let productInStock: number; // in case you dont want to initialize a variable it must be explicitly typed
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('182'); // NaN could be treated as a number
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hexadecimal = 0xfff; // 4095
  console.log('hexadecimal', hexadecimal);
  let binary = 0b1010; // 10 => '0b' expects a binary number
  console.log('binary', binary);

  const number: number = 10; // type numbers wit 'number'
  console.log(number);
})();
