// Only recommended in migration or adoption cases
(() => {
  let dynamicVariable: any;
  dynamicVariable = 100;
  dynamicVariable = null;
  dynamicVariable = {};
  dynamicVariable = 'any';

  dynamicVariable = 'Hello';
  const rta = (dynamicVariable as string).toLowerCase(); // Type Casting with 'as' keyword
  console.log(rta);

  dynamicVariable = 182;
  const rta2 = (<number>dynamicVariable).toFixed(); // Type Casting with '<>' operator
  console.log(rta2);
})();
