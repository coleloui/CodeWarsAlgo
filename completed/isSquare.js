// TODO:Given an integral number, determine if it's a square number:
// TODO:In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// TODO:The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(-1)); //=>  false
console.log(isSquare(0)); //=>  true
console.log(isSquare(3)); //=>  false
console.log(isSquare(4)); //=>  true
console.log(isSquare(25)); //=>  true
console.log(isSquare(26)); //=>  false
