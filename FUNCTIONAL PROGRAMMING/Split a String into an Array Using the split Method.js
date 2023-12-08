//The variable watchList holds an array of objects with information on several movies. Use reduce to find the average ImDb rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

function splitify(str) {
    // Only change code below this line
  return str.split(/\W/)
    // Only change code above this line
  }
  
  let res = splitify("Hello World,I-am code");
  console.log(res)