(() => {
  const totalCalculator = (prices: number[]): string => {
    const result = prices.reduce((total, item) => total + item, 0).toString();
    return result;
  };

  const printTotal = (prices: number[]): void => {
    const result = totalCalculator(prices);
    console.log(`The total is ${result}`);
  };

  printTotal([1, 2, 1, 1, 1]);
})();
