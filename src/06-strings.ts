(() => {
  let productTitle = '6 strings Guitar';
  productTitle = '7 strings guitar';
  console.log('productTitle', productTitle);

  const productDescription = "It's a brand new guitar";
  console.log('productDescription', productDescription);

  let productPrice: number = 100;
  let isNew: boolean = true;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  const myString: string = 'New String'; // remember that the type must always be 'string' not 'String' which its for the String object
})();
