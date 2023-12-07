function booWho(bool) {
  return typeof bool === "boolean";
}
let ans = booWho(null);
console.log(ans);
