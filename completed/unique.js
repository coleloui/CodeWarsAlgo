//TODO:There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // do magic
  let d = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      d.push(arr[i]);
    }
    if (!d.includes(arr[i])) {
      b.push(arr[i]);
    }
  }
  if (b.length > d.length) {
    return d;
  }
  if (d.length > b.length) {
    return b;
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 0, 0]));
