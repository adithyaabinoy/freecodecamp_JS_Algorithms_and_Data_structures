function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n,0,arr1[i]);
    n++;
  }
  return localArr;
}
let res = frankenSplice([1, 2, 3], [4, 5, 6], 2);
console.log(res);
