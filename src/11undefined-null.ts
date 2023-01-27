(() => {
  // let number: number = undefined;
  // let string: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let number: number | null = null;
  number = 182;

  let string: string | undefined = undefined;
  string = 'blink';

  function hi(name: string | null) {
    let hello = 'Hello ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    return console.log(hello);
  }

  function hello(name: string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody'; // '?' optional chaining
    return console.log(hello);
  }

  hi('Gabriel');
  hi(null);

  hello('Gabriel');
  hello(null);
})();
