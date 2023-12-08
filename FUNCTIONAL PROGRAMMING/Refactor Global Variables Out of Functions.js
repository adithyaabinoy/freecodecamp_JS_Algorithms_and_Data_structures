//Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
  }
}
const addedList = add(bookList, "A Brief History of Time");
const removedList = remove(bookList, "On The Electrodynamics of Moving Bodies");
const newerList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);
console.log("added", addedList);
console.log("removed", removedList);
console.log("newList", newerList);
