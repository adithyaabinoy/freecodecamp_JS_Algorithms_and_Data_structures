const truncateString = (str, num) => {
  return str.length > num ? str.slice(0, num) + "....." : str;
};

let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(result);
