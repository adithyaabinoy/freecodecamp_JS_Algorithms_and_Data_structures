function findElement(arr, func) {
    if (arr.length > 0 && !func(arr[0])) {
      return findElement(arr.slice(1), func);
    } else {
      return arr[0];
    }
  }
  
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);