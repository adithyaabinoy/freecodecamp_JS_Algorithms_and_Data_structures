function factorialize(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
let result = factorialize(5);
console.log(result);
