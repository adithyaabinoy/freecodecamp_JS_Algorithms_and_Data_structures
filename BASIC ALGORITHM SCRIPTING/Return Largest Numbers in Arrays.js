function largestOfFour(arr) {
  return arr.map((numbers) => {
    return numbers.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    });
  });
}

let largest = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(largest);
