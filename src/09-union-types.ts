(() => {
  let userId: string | number;
  userId = 182182;
  userId = 'wasd';

  const grettings = (text: string | number) => {
    if (typeof text === 'string') {
      console.log(`string ${text.toLowerCase()}`);
    } else {
      console.log(`string ${text.toFixed(1)}`);
    }
  };

  grettings('blink');
  grettings(182.1212121212);
})();
