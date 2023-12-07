function titleCase(str) {
  const newTitle = str.split(" ");

  const updatedTitle = [];
  for (let words in newTitle) {
    updatedTitle[words] =
      newTitle[words][0].toUpperCase() + newTitle[words].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
let res = titleCase("I'm a little tea pot");
console.log(res);
